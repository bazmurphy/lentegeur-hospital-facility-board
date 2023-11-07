# -----------------------------------------------

# Create a Security Group (Firewall) for the EC2 Instance
resource "aws_security_group" "lhfb_security_group_ec2_instance" {
  name   = "lhfb-security-group-ec2-instance"
  vpc_id = aws_vpc.lhfb_vpc.id

  # Incoming to Allow Everything
  # ingress {
  #   protocol  = -1
  #   self      = true
  #   from_port = 0
  #   to_port   = 0
  # }

  # Incoming to Allow SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Incoming to Allow HTTP
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outgoing to Allow Everything
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "lhfb-security-group-ec2-instance"
  }
}

# -----------------------------------------------

# Dynamically Get the Amazon Linux 2023 AMI
data "aws_ami" "lhfb_ec2_instance_ami" {
  owners      = ["amazon"] # Replace with the desired owner, e.g., "amazon" for AWS-provided AMIs
  most_recent = true

  filter {
    name   = "name"
    values = ["al2023-ami-2023*"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
}

# -----------------------------------------------

# # Create the EC2 Instance
# resource "aws_instance" "lhfb_ec2_instance" {
#   # Trying to replicate the manual launch user interface:

#   # [1] Use the Amazon Linux 2023 AMI
#   # ami = "ami-04fb7beeed4da358b"
#   ami = data.aws_ami.lhfb_ec2_instance_ami.id

#   # [2] Use the t2.micro Free Tier Instance Type
#   instance_type = "t2.micro"

#   # [3] Key pair for SSH access
#   # key_name = "some-key-pair"

#   # [4] Network Settings

#   # VPC
#   # Do we need to define that here?

#   # Subnet
#   subnet_id = aws_subnet.lhfb_subnet_public_one.id

#   # Auto-assing Public IP
#   associate_public_ip_address = true

#   # Firewall (Security Groups)
#   vpc_security_group_ids = [aws_security_group.lhfb_security_group_ec2_instance.id]

#   # [5] Configure Storage
#   root_block_device {
#     volume_size = 8
#     volume_type = "gp3"
#   }

#   # [6] Advanced Details

#   # User Data
#   # user_data = file("ec2script.sh")

#   user_data = base64encode(templatefile(
#     "ec2-user-data.sh",
#     {
#       NODE_ENV            = var.node_env
#       HOST                = var.host
#       PORT                = var.port
#       APP_KEYS            = var.app_keys
#       API_TOKEN_SALT      = var.api_token_salt
#       ADMIN_JWT_SECRET    = var.admin_jwt_secret
#       TRANSFER_TOKEN_SALT = var.transfer_token_salt
#       JWT_SECRET          = var.jwt_secret
#       DATABASE_CLIENT     = var.database_client
#       DATABASE_HOST       = var.database_host
#       DATABASE_PORT       = var.database_port
#       DATABASE_NAME       = var.database_name
#       DATABASE_USERNAME   = var.database_username
#       DATABASE_PASSWORD   = var.database_password
#       DATABASE_SSL        = var.database_ssl
#       CLOUDINARY_NAME     = var.cloudinary_name
#       CLOUDINARY_KEY      = var.cloudinary_key
#       CLOUDINARY_SECRET   = var.cloudinary_secret
#     }
#   ))

#   tags = {
#     Name = "lhfb-ec2-instance"
#   }

#   # Define the IAM Instance Profile
#   # iam_instance_profile = aws_iam_role.lhfb_iam_role_ec2.id
# }

# -----------------------------------------------

# # Get the Public IP of the created EC2 Instance
# output "lhfb_ec2_instance_public_ip" {
#   description = "EC2 Instance Public IP"
#   value       = aws_instance.lhfb_ec2_instance.public_ip
#   sensitive   = true
# }

# # Get the Public DNS of the created EC2 Instance
# output "lhfb_ec2_instance_public_dns" {
#   description = "EC2 Instance Public DNS"
#   value       = aws_instance.lhfb_ec2_instance.public_dns
#   # sensitive = true
# }

# # URL
# output "lhfb_ec2_url" {
#   description = "EC2 URL"
#   value       = "http://${aws_instance.lhfb_ec2_instance.public_dns}"
#   # sensitive = true
# }

# -----------------------------------------------

# Environment Variables
# Strapi
variable "node_env" {}
variable "host" {}
variable "port" {}
variable "app_keys" {}
variable "api_token_salt" {}
variable "admin_jwt_secret" {}
variable "transfer_token_salt" {}
variable "jwt_secret" {}
# Database
variable "database_client" {}
variable "database_host" {}
variable "database_port" {}
variable "database_name" {}
variable "database_username" {}
variable "database_password" {}
variable "database_ssl" {}
# Cloudinary
variable "cloudinary_name" {}
variable "cloudinary_key" {}
variable "cloudinary_secret" {}

# # -----------------------------------------------

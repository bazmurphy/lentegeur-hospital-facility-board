
# -----------------------------------------------

# Create an IAM User Group
# resource "aws_iam_group" "lhfb_user_group" {
#   name = "lhfb-user-group"
# }

# Create an IAM User
# resource "aws_iam_user" "lhfb_user" {
#   name = "lhfb-user"
# }

# Add the IAM User to the IAM User Group
# resource "aws_iam_user_group_membership" "lhfb_user_group_membership" {
#   user = aws_iam_user.lhfb_user.name
#   groups = [aws_iam_group.lhfb_user_group.name]
# }

# Define a Policy Document
# resource "aws_iam_policy_document" "lhfb_policy_document" {
#   version = "2012-10-17" # Terraform will choose a sensible option if not defined
#   statement { 
#     actions = ["ec2:*"]
#     effect    = "Allow" # this is optional, if not defined it defaults to Allow
#     resources = ["*"]
#   }
# }

# Create an IAM Policy from the Policy Document
# resource "aws_iam_policy" "lhfb_policy_ec2" {
#   name = "lhfb-policy-ec2"
#   policy = data.aws_iam_policy.lhfb-policy-document.json
# }

# # Attach the IAM Policy to the IAM User Group
# resource "aws_iam_group_policy_attachment" "lhfb-policy-attachment" {
#   policy_arn = aws_iam_policy.lhfb_policy_ec2.arn
#   group = aws_iam_group.lhfb_user_group.name
# }

# -----------------------------------------------

# Create an IAM Role that allows EC2 access
# resource "aws_iam_role" "ec2_access_role" {
#   name = "EC2AccessRole"
#   assume_role_policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [
#       {
#         Action = "sts:AssumeRole",
#         Effect = "Allow",
#         Principal = {
#           Service = "ec2.amazonaws.com"
#         }
#       }
#     ]
#   })
# }

# Create an IAM Instance Profile and associate it with the IAM Role
# resource "aws_iam_instance_profile" "ec2_access_instance_profile" {
#   name = "EC2AccessInstanceProfile"
#   role = aws_iam_role.ec2_access_role.name
# }

# Attach the IAM Policy to the IAM Role
# resource "aws_iam_policy_attachment" "ec2_access_role_policy_attachment" {
#   name       = "EC2AccessRolePolicyAttachment"
#   roles      = [aws_iam_role.ec2_access_role.name]
#   policy_arn = aws_iam_policy.ec2_access_policy.arn
# }

# -----------------------------------------------

# Create an IAM Role for the EC2 Instance
# resource "aws_iam_role" "lhfb_iam_role_ec2" {
#   name = "lhfb-iam-role-ec2-to-rds"
#   assume_role_policy = {}
# }

# resource "aws_iam_policy" "lhfb_iam_policy_ec2" {
#   name = "lhfb-iam-policy-ec2"
#   description = "IAM Policy for EC2 to access RDS"
#   policy = {}
# }

# resource "aws_iam_role_policy_attachment" "lhfb_iam_role_policy_attachment_ec2" {
#   policy_arn = aws_iam_policy.lhfb_iam_policy_ec2.arn
#   role = aws_iam_role.lhfb_iam_role_ec2.name
# }

# -----------------------------------------------

# Create an IAM Role for the RDS Instance
# resource "aws_iam_role" "lhfb_iam_role_rds" {
#   name = "lhfb-iam-role-rds-to-ec2"
#   assume_role_policy = {}
# }

# resource "aws_iam_policy" "lhfb_iam_policy_rds" {
#   name = "lhfb-iam-policy-rds"
#   description = "IAM Policy for RDS to access EC2"
#   policy = {}
# }

# resource "aws_iam_role_policy_attachment" "lhfb_iam_role_policy_attachment_rds" {
#   # policy_arn = aws_iam_policy.lhfb_iam_policy_rds.arn
#   policy_arn = "arn:aws:iam::aws:policy/AmazonRDS_DataAPI"
#   role = aws_iam_role.lhfb_iam_role_rds.name
# }

# -----------------------------------------------

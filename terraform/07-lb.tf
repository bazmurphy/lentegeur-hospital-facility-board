# -----------------------------------------------

# Create a Load Balancer Security Group
resource "aws_security_group" "lhfb_security_group_load_balancer" {
  name   = "lhfb-security-group-load-balancer"
  vpc_id = aws_vpc.lhfb_vpc.id

  # Incoming to Allow HTTP
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Incoming to Allow Strapi
  # ingress {
  #   from_port   = 1337
  #   to_port     = 1337
  #   protocol    = "tcp"
  #   cidr_blocks = ["0.0.0.0/0"]
  # }

  # Outgoing to Allow Everything
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "lhfb-security-group-load-balancer"
  }
}

# -----------------------------------------------

# Create a Load Balancer Target Group
resource "aws_lb_target_group" "lhfb_load_balancer_target_group" {
  # [1] Basic Configuration
  # [1.1] Target Type
  target_type = "instance"
  # [1.2] Target Group Name
  name = "lhfb-lb-target-group"
  # [1.3] Protocol
  protocol = "HTTP"
  # [1.4] Port
  port = 80
  # [1.5] IP Address Type
  ip_address_type = "ipv4"
  # [1.6] VPC
  vpc_id = aws_vpc.lhfb_vpc.id
  # [1.7] Procotol Version
  protocol_version = "HTTP1"

  # [2] Health Checks
  health_check {
    # Disable Health Checks
    # enabled = false
    # [2.1] Health Check Protocol
    protocol = "HTTP"
    # [2.2] Health Check Path
    path = "/"
    # Advanced Health Check Settings
    # [2.3] Health Check Port
    port = "traffic-port"
    # port = 80
    # [2.4] Healthy Threshold
    healthy_threshold = 3
    # [2.5] Unhealthy Threshold
    unhealthy_threshold = 2
    # [2.6] Timeout
    timeout = 5
    # [2.7] Interval
    interval = 300
    # [2.8] Success Codes
    matcher = "200"
  }

  # [3] Attributes

  # [4] Tags
  tags = {
    Name = "lhfb-load-balancer-target-group"
  }

  # [5] Register Targets
}

# -----------------------------------------------

# Create a Load Balancer
resource "aws_lb" "lhfb_load_balancer" {
  # [1] Load Balancer Types
  # Application Load Balancer
  load_balancer_type = "application"

  # [2] Basic Configuraiton
  # [2.1] Load Balancer Name
  name = "lhfb-load-balancer"
  # [2.2] Scheme
  # Internet Facing = true
  internal = false
  # [2.3] IP Address Type
  ip_address_type = "ipv4"

  # [3] Network Mapping
  # [3.1] VPC
  subnets = [aws_subnet.lhfb_subnet_public_one.id, aws_subnet.lhfb_subnet_public_two.id]

  # [4] Security Groups
  security_groups = [aws_security_group.lhfb_security_group_load_balancer.id]

  # [5] Listeners And Routing
  # defined in the "aws_lb_listener" resource

  # [6] Tags
  tags = {
    Name = "lhfb-load-balancer"
  }
}

# -----------------------------------------------

# Create a Load Balancer Listener for HTTP
resource "aws_lb_listener" "lhfb_load_balancer_listener" {
  load_balancer_arn = aws_lb.lhfb_load_balancer.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.lhfb_load_balancer_target_group.arn
  }
}

# -----------------------------------------------

output "lhfb_load_balancer_dns_name" {
  description = "Application Load Balancer DNS Name"
  value       = "http://${aws_lb.lhfb_load_balancer.dns_name}"
}

# -----------------------------------------------

# -----------------------------------------------

# Define the Provider and Region
provider "aws" {
  region = "eu-west-2" // for local Demo
  // region = "af-south-1" // for Live
}

# -----------------------------------------------

# Get the Availability Zones
data "aws_availability_zones" "available" {}

# -----------------------------------------------

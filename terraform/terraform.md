1. Go to AWS IAM

2. Create a User Group "LHFB-UserGroup-Terraform"

3. Attach the various required Policies (for EC2 and RDS etc)

4. Create a User "lhfb-user-terraform"

5. Add it to the User Group "LHFB-UserGroup-Terraform"

6. Create Access Key and Secret Access Key

7. Save these somewhere

8. Locally run `aws configure`

9. Add the Access Key and Secret Access Key

10. Now when we run terraform it will use those credentials

11. create and write a `main.tf` file

12. `terraform init`

13. `terraform validate`

14. `terraform plan`

15. `terraform apply`

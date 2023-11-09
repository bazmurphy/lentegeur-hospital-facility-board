# -----------------------------------------------

# Create Bucket
resource "aws_s3_bucket" "lhfb_bucket" {
  # [1] General Configuration
  # Bucket Name
  bucket = "lhfb"

  # [7] Advanced Settings
  # Object Lock
  object_lock_enabled = false
}

# [2] Object Ownership
resource "aws_s3_bucket_ownership_controls" "lhfb_bucket_ownership_controls" {
  bucket = aws_s3_bucket.lhfb_bucket.id

  rule {
    object_ownership = "BucketOwnerEnforced" # BucketOwnerEnforced or BucketOwnerPreferred ???
  }
}

# [3] Block Public Access Settings For this Bucket
resource "aws_s3_bucket_public_access_block" "lhfb_bucket_public_access_block" {
  bucket = aws_s3_bucket.lhfb_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# [3] ACL - There is some conflict between ACL and the other Security Settings ???
# resource "aws_s3_bucket_acl" "lhfb_bucket_acl" {
#   depends_on = [
#     aws_s3_bucket_ownership_controls.lhfb_bucket_ownership_controls,
#     aws_s3_bucket_public_access_block.lhfb_bucket_public_access_block,
#   ]
#   bucket = aws_s3_bucket.lhfb_bucket.id
#   acl = "public-read"
# }

# [4] Bucket Versioning
resource "aws_s3_bucket_versioning" "lhfb_bucket_versioning" {
  bucket = aws_s3_bucket.lhfb_bucket.id

  versioning_configuration {
    status = "Disabled"
  }
}

# Bucket Properties > Static Website Hosting
resource "aws_s3_bucket_website_configuration" "lhfb_bucket_website_configuration" {
  bucket = aws_s3_bucket.lhfb_bucket.id

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

# Define The S3 Policy Document
data "aws_iam_policy_document" "lhfb_policy_document_s3" {
  statement {
    # sid    = "PublicRead"
    effect = "Allow"
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.lhfb_bucket.arn}/*"]
  }
}

# Attach The Policy To The S3 Bucket
resource "aws_s3_bucket_policy" "lhfb_bucket_policy" {
  bucket = aws_s3_bucket.lhfb_bucket.id
  policy = data.aws_iam_policy_document.lhfb_policy_document_s3.json
}

# -----------------------------------------------

# module "client_dist_folder" {
#   source = "hashicorp/dir/template"

#   # base_dir = "${path.module}/"
#   base_dir = "../client/dist"
# }

# # Upload the contents of client/dist/ to the S3 Bucket
# resource "aws_s3_object" "lhfb_bucket_s3_object" {
#   bucket = aws_s3_bucket.lhfb_bucket.id

#   for_each = module.client_dist_folder.files

#   key          = each.key
#   content_type = each.value.content_type

#   # The template_files module guarantees that only one of these two attributes will be set for each file,
#   # depending on whether it is an in-memory template rendering result or a static file on disk.
#   source = each.value.source_path

#   # (!) S3 assigns a Content Type of binary/octet-stream to uploaded files by default
#   content = each.value.content

#   # Unless the bucket has encryption enabled, the ETag of each object is an MD5 hash of that object.
#   etag = each.value.digests.md5
# }

# -----------------------------------------------

output "lhfb_s3_bucket_website_endpoint" {
  description = "S3 URL"
  value       = "http://${aws_s3_bucket_website_configuration.lhfb_bucket_website_configuration.website_endpoint}"
  # sensitive = true
}

# -----------------------------------------------

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}

resource "aws_s3_bucket" cubeta {
  tags = {
    Name = "Mi Cubeta"
  }
}

resource "aws_s3_bucket_acl" "acl_cubeta" {
  bucket = aws_s3_bucket.cubeta.id 
  acl = "private"
}
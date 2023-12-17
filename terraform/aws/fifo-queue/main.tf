terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.30.0"
    }
  }
}

provider "aws" {
  # Configuration options
  profile = "aws"
} 

resource "aws_sqs_queue" "product-update" {
  name                        = "product-update-queue.fifo"
  fifo_queue                  = true
  content_based_deduplication = true
}
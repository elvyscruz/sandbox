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
  region  = "us-east-1"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "test_lambda" {
  # If the file is not in the current working directory you will need to include a 
  # path.module in the filename.
  filename      = "test.zip"
  function_name = "product-update-lambda"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.handler"

  runtime = "nodejs14.x"

  environment {
    variables = {
      foo = "bar"
    }
  }
<<<<<<< HEAD
}

resource "aws_lambda_layer_version" "uuid" {
  filename   = "uuid.zip"
  layer_name = "uuid"

  compatible_runtimes = ["nodejs16.x"]
}
=======
}
>>>>>>> dae995b (terraform snippets)

data "aws_iam_role" "iam_lambda" {
  name = "iam_for_lambda"
}


resource "aws_lambda_function" "test_lambda" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename         = "function.zip"
  function_name    = "mylambda"
  role             = data.aws_iam_role.iam_lambda.arn
  handler          = "index.handler"
  runtime          = "nodejs16.x"
  source_code_hash = filebase64sha256("function.zip")
  layers           = [aws_lambda_layer_version.uuid.arn]


  environment {
    variables = {
      foo = "bar"
    }
  }
}

resource "aws_lambda_layer_version" "uuid" {
  filename   = "uuid.zip"
  layer_name = "uuid"

  compatible_runtimes = ["nodejs16.x"]
}

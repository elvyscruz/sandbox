output "instance_id" {
  description = "the id of the instance"
  value       = aws_instance.app_server.id
}

output "instance_public_ip" {
  description = "the public ip"
  value       = aws_instance.app_server.public_ip
}

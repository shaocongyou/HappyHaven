from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)  # 存储密码哈希
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)



class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class BalanceChange(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    change_type = models.CharField(max_length=10, choices=[('recharge', 'Recharge'), ('deduct', 'Deduct')])
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

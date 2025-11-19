from django.db import models
from django.utils import timezone

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=3)
    description = models.TextField(blank=True, default='не указано')
    img = models.ImageField(default='media/default.png', upload_to='media')
    category = models.CharField(default='default')
    location = models.CharField(default='default')
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.name
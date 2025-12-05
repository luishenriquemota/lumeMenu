from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



class Plate(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=60, null=False, blank=False, unique=True)
    description = models.CharField(max_length=240, null=True, blank=True)
    image = models.ImageField(upload_to='plates/')
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False, validators=[MinValueValidator(10), MaxValueValidator(1000)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    

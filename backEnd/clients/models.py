from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid



class Client(AbstractUser):
   id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
   email = models.EmailField(max_length=125, unique=True, null=False, blank=False)


   USERNAME_FIELD = 'email'
   REQUIRED_FIELDS = ['username']





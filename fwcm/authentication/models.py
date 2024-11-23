from django.contrib.auth.models import AbstractUser
from django.db import models

class Account(AbstractUser):
    is_manager = models.BooleanField(default=False)
    is_employee = models.BooleanField(default=False)

    agenda = models.BooleanField(default=False)
    agenda_readonly = models.BooleanField(default=False)
    agenda_delete_machine_persons = models.BooleanField(default=False)
    stock = models.BooleanField(default=False)
    stock_readonly = models.BooleanField(default=False)
    studio = models.BooleanField(default=False)
    studio_readonly = models.BooleanField(default=False)

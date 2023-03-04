from django.contrib import admin
from .models import UserAccount,Question,Answer,Comment
# Register your models here.
admin.site.register([UserAccount,Question,Answer,Comment])
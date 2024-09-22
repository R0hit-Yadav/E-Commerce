from django.contrib import admin
from .models import Phone, Headphone, Camera, Laptop, Gaming

admin.site.register(Phone)
admin.site.register(Camera)
admin.site.register(Headphone)
admin.site.register(Laptop)
admin.site.register(Gaming)

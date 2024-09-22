from django.contrib import admin
from .models import *

admin.site.register(Phone)
admin.site.register(Camera)
admin.site.register(Headphone)
admin.site.register(Laptop)
admin.site.register(Gaming)
admin.site.register(Transaction)
admin.site.register(AllItems)




@admin.register(RegisterCustomer)
class RegisterCustomerAdmin(admin.ModelAdmin):
    list_display = ('id','first_name', 'last_name', 'email', 'username','password')
    search_fields = ('id','username', 'email')

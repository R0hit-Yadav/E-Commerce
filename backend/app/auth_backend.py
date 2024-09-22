from django.contrib.auth.backends import BaseBackend
from .models import RegisterCustomer
from django.contrib.auth.hashers import check_password

class RegisterCustomerBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = RegisterCustomer.objects.get(username=username)
            if user and check_password(password, user.password):
                return user
        except RegisterCustomer.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return RegisterCustomer.objects.get(pk=user_id)
        except RegisterCustomer.DoesNotExist:
            return None

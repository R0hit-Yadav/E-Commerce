from django.urls import path
from .views import CategoryListCreate

urlpatterns = [
    path('api/Category/', CategoryListCreate.as_view(), name='Category-list-create'),
]
    
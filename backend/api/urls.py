from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

# router = DefaultRouter()
# router.register('product', ProductAPIView)

urlpatterns = [
    # path('', include(router.urls)),
    path('product/', ProductAPIView.as_view()),
    path('product/<int:pk>/', ProductItemAPIView.as_view()),
]

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # Django's built-in administrative interface.
    path('admin/', admin.site.urls),

    # Send the site's root URLs to the To-Do app.
    path('', include('todo.urls')),
]

from django.contrib.auth.decorators import user_passes_test
from django.http import HttpResponseForbidden

def permission_required(permission):
    def decorator(view_func):
        def wrapper(request, *args, **kwargs):
            validate = False
            match permission:
                case 'manager':
                    if request.user.is_manager:
                        validate = True
                case 'employee':
                    if request.user.is_employee or request.user.is_manager:
                        validate = True
                case 'agenda':
                    if request.user.agenda:
                        validate = True
                case 'agenda_readonly':
                    if request.user.agenda_readonly or request.user.agenda:
                        validate = True
                case 'agenda_delete_machine_persons':
                    if request.user.agenda_delete_machine_persons:
                        validate = True
                case 'stock':
                    if request.user.stock:
                        validate = True
                case 'stock_readonly':
                    if request.user.stock_readonly or request.user.stock:
                        validate = True
                case 'studio':
                    if request.user.studio:
                        validate = True
                case 'studio_readonly':
                    if request.user.studio_readonly or request.user.studio:
                        validate = True

            if validate:
                return view_func(request, *args, **kwargs)
            else:
                return HttpResponseForbidden("Vous n'avez pas la permission d'accéder à cette page.")
        return wrapper
    return decorator

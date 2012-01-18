from django.forms import widgets


class AutofillSlugWidget(widgets.TextInput):
    """ Field that renders a slug based on the input in another specified
    source field.
    """

    class Media:
        js = (
            'django_extensions/js/jquery.js',
            'django_extensions/js/jquery.slug.js',
        )

    def __init__(self, populate_from=None, attrs=None):
        """
        `populate_from` sets the attribute on the slug field's <input>
        element, and this is used by the JavaScript function to identify
        the source input.
        """
        if populate_from is None:
            raise ValueError("missing 'populate_from' argument")
        attrs = attrs if attrs else {}
        attrs.update({"data-slug-source": populate_from})
        super(AutofillSlugWidget, self).__init__(attrs)


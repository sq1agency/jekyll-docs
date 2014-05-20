---
layout: page
title: Documentation
---

{% for page in site.pages %}
{% if page.documentation == true %}
{% if page.resource == true %}
{% elsif page.title == "Documentation" %}
{% elsif page.url == "/" %}
{% else %}
<a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
{% endif %}
{% endif %}
{% endfor %}
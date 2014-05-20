---
layout: page
documentation: true
title: Dogs
---

{% for cat in site.category-list %}
{% if cat == "dogs" %}
{% for page in site.pages %}
{% if page.resource == true %}
{% for pc in page.categories %}
{% if pc == cat %}
<a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
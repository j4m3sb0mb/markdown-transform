# Title

Paragraph with a {{seller}} and more text and{{#if forceMajeure}}, this is conditional,{{/if}} with some **marker** {{% 1+1 = 3 %}}. {{#join foo separator=";"}}{{element}}{{/join}}

Paragraph with a {{seller}} and more text and{{#if forceMajeure}}, this is conditional,{{else}} and this is too,{{/if}} with some **marker** {{% 1+1 = 3 %}}. {{#join foo}}{{element}}{{/join}}

{{buyer as "FOO"}}

{{#clause payment src="ap://promissory-note-md@0.3.2#b4c966c2081303d017d3dde359bd8039ceb4a5dbacb6e6e09618e33a00d3f566"}}
BLABLABLABLA


{{#ulist items}}
one item: **{{item}}**
{{/ulist}}

{{#olist items}}
one item: **{{item}}**
{{/olist}}

- one
- two
- three

{{/clause}}

There is also a new {{#optional name}} inline which can contain {{this}}{{/optional}}.

There is also a new {{#optional name}} inline which can contain {{this}}{{else}}something else{{/optional}}.

This is a [link with a {{variable}} in it](mylink).

This is a [link with a {{this}} in it](mylink).

This is a [link with an {{#if name}} in it{{/if}}](mylink).

This is a [link with an {{#optional name}} in it{{/optional}}](mylink).

This is a [link with a {{#join name}} in it{{/join}}](mylink).

This is a [link with a {{% formula %}} in it](mylink).

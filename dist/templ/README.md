# generate templates

Use Kotlin script to generate from templates.

Edit the script input to change values.

To install Kotlin on Mac OS X, use sdk:

    sdk install kotlin

Next run the script:

    ./transform.kts

To run from other dirs and, as example, generate a local `pom.xml`:

    export PERFANA_CONFIG_EXAMPLES_DIR=<path>
    $PERFANA_CONFIG_EXAMPLES_DIR/template/transform.kts pom > pom.xml


## env variables

Set the following env variables before generating to override defaults:

```shell
export PERFANA_CONFIG_EXAMPLES_DIR=<path>
export PERFANA_CLIENT=mycompanyx
export TEMPLATE_DIR=$PERFANA_CONFIG_EXAMPLES_DIR/template
export PERFANA_API_KEY=<perfana-api-key>
export LOAD_TEST_TOOL=jmeter
```

The mTLS key and cert for the Perfana Secure Gateway (PSG):

```shell
export PSG_TLS_KEY=<path>/tls.key
export PSG_TLS_CRT=<path>/tls.crt
```

## arguments

Use the following arguments to control what is generated:

* `pom` --- generates pom.xml
* `psg` --- for values file perfana-secure-gateway
* `metrics` --- for grafana-agent config
* `afterburner` --- kubernetes yaml for Afterburner image
* `all` --- generate all templates
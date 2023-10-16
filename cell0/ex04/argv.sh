if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi
# Muestra hasta un máximo de 3 argumentos
max_args=3

# Muestra los primeros "max_args" argumentos en líneas separadas
printf "%s\n" "${@:1:$max_args}"
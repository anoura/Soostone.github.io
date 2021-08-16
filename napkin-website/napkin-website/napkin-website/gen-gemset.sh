#!/nix/store/715y5lnw12vdcc3hh9sc9vbkdi6c83x6-bash-4.4-p23/bin/bash

nix-shell -p bundler -p bundix \
   --run 'bundler update; bundler lock; bundler package --no-install --path vendor; bundix; rm -rf vendor'

echo "You can now run nix-shell"

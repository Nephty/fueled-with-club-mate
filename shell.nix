{ pkgs? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.python3
    pkgs.python3.pkgs.virtualenv
  ];

  shellHook = ''
    virtualenv env
    source env/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
  '';
}
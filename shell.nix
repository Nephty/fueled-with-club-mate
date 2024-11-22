{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    python312Packages.django
  ];

  shellHook = ''
  '';
}

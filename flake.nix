{
  description = "mecattaf.dev, generated with mmdoc";

  inputs = {
    mmdoc.url = "github:ryantm/mmdoc";
    nixpkgs.follows = "mmdoc/nixpkgs";
    systems.follows = "mmdoc/systems";
  };

  outputs = {
    mmdoc,
    nixpkgs,
    systems,
    ...
  }: let
    eachSystem = nixpkgs.lib.genAttrs (import systems);
  in {
    packages = eachSystem (system: let
      pkgs = import nixpkgs {inherit system;};
      cmarkGfmStatic = pkgs.pkgsStatic.cmark-gfm.overrideAttrs (old: {
        cmakeFlags = (old.cmakeFlags or []) ++ [
          "-DCMARK_SHARED=OFF"
          "-DCMARK_STATIC=ON"
        ];
      });
    in {
      default = mmdoc.packages.${system}.default;
      inherit (mmdoc.packages.${system}) mmdoc;

      # A portable binary for Cloudflare Pages' x86_64 Linux build image.
      mmdoc-static = pkgs.pkgsStatic.callPackage "${mmdoc}/pkgs/mmdoc.nix" {
        self = mmdoc;
        cmark-gfm = cmarkGfmStatic;
      };
    });
  };
}

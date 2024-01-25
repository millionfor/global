/**
 * Filename:        index.d
 * @Created Time    Thu, Jan 25, 2024 15:58
 * @Last Modified   Thu, Jan 25, 2024 15:58
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     ts
 */

declare global {
  interface Window {
    Math: any;
  }
  const self: any;
  let __g: any;
}

declare const global: any;

export default global;

// vim: set ft=javascript fdm=marker et ff=unix tw=80 sw=2:

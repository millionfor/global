/**
 * @FileName        index
 * @CreatedTime     Thu, Jan 25, 2024 16:08
 * @LastModified    Thu, Jan 25, 2024 16:08
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     window && node => global
 */

const getGlobal = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }

  // Check if we're in a Web Worker
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  // Otherwise, return the global object
  return Function('return this')();
};

const global: any = getGlobal();

// Check if __g is a number and reassign if necessary
if (typeof __g === 'number') {
  (__g as any) = global;
}

export default global;

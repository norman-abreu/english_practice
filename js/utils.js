export function normalize(ans){
  if(Array.isArray(ans)) return ans.map(a => String(a).toLowerCase().trim());
  return [String(ans).toLowerCase().trim()];
}

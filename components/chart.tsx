export function Chart() {
  return (
    <div className="h-full w-full">
      <div className="relative w-full h-full" id="dexscreener-embed"><iframe className="w-full h-full" src="https://dexscreener.com/solana/2tmGDRpTmVkaLQeDDDgN7oXAz6mSnoz4eLFU2G3UZNR8?embed=1&trades=0&info=0"></iframe></div>
    </div>
  )
}
// <style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener - embed{padding - bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style>

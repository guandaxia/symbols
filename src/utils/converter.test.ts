import { SymbolMapperType, convertToSymbols } from './converter';

const TEST_TEXT =
  'If you shed tears when you miss the sun, you also miss the stars.';

const TEST_CASE_MAP = new Map<SymbolMapperType, string>([
  [
    'circled',
    'Ⓘⓕ ⓨⓞⓤ ⓢⓗⓔⓓ ⓣⓔⓐⓡⓢ ⓦⓗⓔⓝ ⓨⓞⓤ ⓜⓘⓢⓢ ⓣⓗⓔ ⓢⓤⓝ, ⓨⓞⓤ ⓐⓛⓢⓞ ⓜⓘⓢⓢ ⓣⓗⓔ ⓢⓣⓐⓡⓢ.',
  ],
  [
    'double-struck',
    '𝕀𝕗 𝕪𝕠𝕦 𝕤𝕙𝕖𝕕 𝕥𝕖𝕒𝕣𝕤 𝕨𝕙𝕖𝕟 𝕪𝕠𝕦 𝕞𝕚𝕤𝕤 𝕥𝕙𝕖 𝕤𝕦𝕟, 𝕪𝕠𝕦 𝕒𝕝𝕤𝕠 𝕞𝕚𝕤𝕤 𝕥𝕙𝕖 𝕤𝕥𝕒𝕣𝕤.',
  ],
  [
    'full-width',
    'Ｉｆ ｙｏｕ ｓｈｅｄ ｔｅａｒｓ ｗｈｅｎ ｙｏｕ ｍｉｓｓ ｔｈｅ ｓｕｎ, ｙｏｕ ａｌｓｏ ｍｉｓｓ ｔｈｅ ｓｔａｒｓ.',
  ],
  [
    'mono-space',
    '𝙸𝚏 𝚢𝚘𝚞 𝚜𝚑𝚎𝚍 𝚝𝚎𝚊𝚛𝚜 𝚠𝚑𝚎𝚗 𝚢𝚘𝚞 𝚖𝚒𝚜𝚜 𝚝𝚑𝚎 𝚜𝚞𝚗, 𝚢𝚘𝚞 𝚊𝚕𝚜𝚘 𝚖𝚒𝚜𝚜 𝚝𝚑𝚎 𝚜𝚝𝚊𝚛𝚜.',
  ],
  [
    'fraktur',
    'ℑ𝔣 𝔶𝔬𝔲 𝔰𝔥𝔢𝔡 𝔱𝔢𝔞𝔯𝔰 𝔴𝔥𝔢𝔫 𝔶𝔬𝔲 𝔪𝔦𝔰𝔰 𝔱𝔥𝔢 𝔰𝔲𝔫, 𝔶𝔬𝔲 𝔞𝔩𝔰𝔬 𝔪𝔦𝔰𝔰 𝔱𝔥𝔢 𝔰𝔱𝔞𝔯𝔰.',
  ],
  [
    'script',
    'ℐ𝒻 𝓎ℴ𝓊 𝓈𝒽ℯ𝒹 𝓉ℯ𝒶𝓇𝓈 𝓌𝒽ℯ𝓃 𝓎ℴ𝓊 𝓂𝒾𝓈𝓈 𝓉𝒽ℯ 𝓈𝓊𝓃, 𝓎ℴ𝓊 𝒶𝓁𝓈ℴ 𝓂𝒾𝓈𝓈 𝓉𝒽ℯ 𝓈𝓉𝒶𝓇𝓈.',
  ],
]);

it('convert text to symbols', () => {
  for (let [type, result] of TEST_CASE_MAP) {
    let convertedText = convertToSymbols(TEST_TEXT, type);

    expect(convertedText).toBe(result);
  }
});

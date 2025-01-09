import {
  isAddress,
  isValidChecksumAddress,
  toChecksumAddress,
  isValidAddress,
  searchChecksummedNetworks,
  isZeroAddress,
  zeroAddress
} from '../src/addresses.js'

import { assert } from 'chai'

const invalidAddresses = [
  '0x000000000000000000000000000000000000000',
  null,
  undefined,
  {},
  [],
  0x6c6922571a2c7087d3429da79b1576438a67de93,
  '0x6c6922571a2c7087d3429da79b1576438a67de9999'
]

const plainAddresses = [
  zeroAddress(),
  '0x8bf74fede129d697dc9fda5e7530b65fad18afa1',
  '0xcdfe354b71d6ed7aee68928b6a3ce993f191a105',
  '0x6c6922571a2c7087d3429da79b1576438a67de93',
  '0x4f1ea153e739ac3eb913963fc6314e37511894f5'
]

const EIP1191ethMainnet = [
  '0x27b1fdb04752bbc536007a920d24acb045561c26',
  '0x3599689E6292b81B2d85451025146515070129Bb',
  '0x42712D45473476b98452f434e72461577D686318',
  '0x52908400098527886E0F7030069857D2E4169EE7',
  '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
  '0x6549f4939460DE12611948b3f82b88C3C8975323',
  '0x66f9664f97F2b50F62D13eA064982f936dE76657',
  '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
  '0x88021160C5C792225E4E5452585947470010289D',
  '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
  '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
  '0xde709f2102306220921060314715629080e2fb77',
  '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
]

const EIP1191rskMainnet = [
  '0x27b1FdB04752BBc536007A920D24ACB045561c26',
  '0x3599689E6292B81B2D85451025146515070129Bb',
  '0x42712D45473476B98452f434E72461577d686318',
  '0x52908400098527886E0F7030069857D2E4169ee7',
  '0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD',
  '0x6549F4939460DE12611948B3F82B88C3C8975323',
  '0x66F9664f97f2B50F62d13EA064982F936de76657',
  '0x8617E340b3D01Fa5f11f306f4090fd50E238070D',
  '0x88021160c5C792225E4E5452585947470010289d',
  '0xD1220A0Cf47c7B9BE7a2e6ba89F429762E7B9adB',
  '0xDBF03B407c01E7CD3cBea99509D93F8Dddc8C6FB',
  '0xDe709F2102306220921060314715629080e2FB77',
  '0xFb6916095cA1Df60bb79ce92cE3EA74c37c5d359'
]

const EIP1191rskTestnet = [
  '0x27B1FdB04752BbC536007a920D24acB045561C26',
  '0x3599689e6292b81b2D85451025146515070129Bb',
  '0x42712D45473476B98452F434E72461577D686318',
  '0x52908400098527886E0F7030069857D2e4169EE7',
  '0x5aAeb6053F3e94c9b9A09F33669435E7EF1BEaEd',
  '0x6549f4939460dE12611948b3f82b88C3c8975323',
  '0x66f9664F97F2b50f62d13eA064982F936DE76657',
  '0x8617e340b3D01fa5F11f306F4090Fd50e238070d',
  '0x88021160c5C792225E4E5452585947470010289d',
  '0xd1220a0CF47c7B9Be7A2E6Ba89f429762E7b9adB',
  '0xdbF03B407C01E7cd3cbEa99509D93f8dDDc8C6fB',
  '0xDE709F2102306220921060314715629080e2Fb77',
  '0xFb6916095CA1dF60bb79CE92ce3Ea74C37c5D359'
]

interface NetworkAddresses {
  [key: string]: string[];
}

const eip1191ChecksummAddresses: NetworkAddresses = {
  "1": [
    '0x88021160c5C792225E4E5452585947470010289d',
    '0x27b1FdB04752bBc536007a920D24ACB045561c26',
    '0x52908400098527886e0f7030069857D2e4169EE7',
    '0x5aaeB6053f3E94C9b9A09f33669435e7Ef1bEAed',
    '0x8617E340b3d01FA5F11F306f4090FD50E238070d',
    '0xd1220a0CF47C7B9Be7A2E6ba89F429762E7B9Adb',
    '0xdBf03b407c01e7cD3CBea99509d93f8dDDC8C6fB',
    '0xDe709F2102306220921060314715629080E2fb77',
    '0xfb6916095Ca1dF60bB79cE92ce3ea74C37c5D359'
  ],
  "30": [
    '0x6549F4939460DE12611948B3F82B88C3C8975323',
    '0x27b1FdB04752BBc536007A920D24ACB045561c26',
    '0x3599689E6292B81B2D85451025146515070129Bb',
    '0x52908400098527886E0F7030069857D2E4169ee7',
    '0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD',
    '0x8617E340b3D01Fa5f11f306f4090fd50E238070D',
    '0xD1220A0Cf47c7B9BE7a2e6ba89F429762E7B9adB',
    '0xDBF03B407c01E7CD3cBea99509D93F8Dddc8C6FB',
    '0xDe709F2102306220921060314715629080e2FB77',
    '0xFb6916095cA1Df60bb79ce92cE3EA74c37c5d359'
  ],
  "31": [
    '0x42712D45473476B98452F434E72461577D686318',
    '0x27B1FdB04752BbC536007a920D24acB045561C26',
    '0x3599689e6292b81b2D85451025146515070129Bb',
    '0x52908400098527886E0F7030069857D2e4169EE7',
    '0x5aAeb6053F3e94c9b9A09F33669435E7EF1BEaEd',
    '0x66f9664F97F2b50f62d13eA064982F936DE76657',
    '0x8617e340b3D01fa5F11f306F4090Fd50e238070d',
    '0xDE709F2102306220921060314715629080e2Fb77',
    '0xFb6916095CA1dF60bb79CE92ce3Ea74C37c5D359',
    '0xd1220a0CF47c7B9Be7A2E6Ba89f429762E7b9adB',
    '0xdbF03B407C01E7cd3cbEa99509D93f8dDDc8C6fB'
  ]
}

const checkSummed = [...EIP1191rskMainnet, ...EIP1191rskTestnet, ...EIP1191ethMainnet]

const netAddresses: NetworkAddresses = {
  "30": EIP1191rskMainnet,
  "31": EIP1191rskTestnet,
  "1": EIP1191ethMainnet.map(a => toChecksumAddress(a, 1))
}

const allAddresses = [
  ...plainAddresses,
  ...checkSummed]

describe(`# Addresses`, function () {
  test({ isAddress }, allAddresses, true)
  test({ isAddress }, invalidAddresses, false)
  test({ isValidAddress }, invalidAddresses, false)
  test({ isValidAddress }, plainAddresses, true)
  test({ isZeroAddress }, allAddresses.filter(a => a !== zeroAddress()), false)
  test({ isZeroAddress }, [zeroAddress(), '0x0000000000000000000000000000000000000000'], true)

  for (let id in netAddresses) {
    let addrs = netAddresses[id].map((a: any) => [a, id])
    test({ isValidChecksumAddress }, addrs, true)
    test({ isValidAddress }, addrs, true)
    // validateAddress with changed ids
    test({ isValidAddress }, netAddresses[id].map(a => [a, (parseInt(id) + 2)]), false)
  }

  for (let id in eip1191ChecksummAddresses) {
    let addrs = eip1191ChecksummAddresses[id].map(a => [a, id])
    test({ isValidChecksumAddress }, addrs, true)
    test({ isValidAddress }, addrs, true)
  }
  test({ toChecksumAddress }, EIP1191ethMainnet.map(a => [a, undefined]), EIP1191ethMainnet)
})

describe(`searchChecksummedNetworks()`, function () {
  for (let id in netAddresses) {
    for (const address of netAddresses[id]) {
      it(`should return a network info for address ${address}`, () => {
        const result = searchChecksummedNetworks(address);
        assert.equal(Array.isArray(result), true);
        assert.isTrue(result.some(r => r.chainId === parseInt(id)));
      })
    }
  }
})

function test (payload: any, value: any[], expected: boolean | string[]) {
  value = (!Array.isArray(value)) ? [value] : value
  for (let method in payload) {
    let tm = payload[method]
    if (typeof tm !== 'function') throw new Error('invalid payload')
    describe(`${method}()`, function () {
      for (let key in value) {
        let v = value[key]
        let e = (Array.isArray(expected)) ? expected[key] : expected
        it(`${v} should be ${e}`, () => {
          v = (!Array.isArray(v)) ? [v] : v
          assert.deepEqual(tm(...v), e)
        })
      }
    })
  }
}

import {
  Section
} from './section';

export const SECTIONS: Section[] = [{
  num: 1,
  title: '1.0 Threats, Attacks and Vulnerabilities',
  color: '#0090ba',
  icon: 'fa-exclamation-triangle',
  subsections: [
    {
    subNum: 1.1,
    subTitle: 'Given a scenario, analyze indicators of compromise and determine the type of malware.',
    links: [
      {title: 'An Overview of Malware', link: 'https://www.youtube.com/watch?v=f3eIERxYHhY'},
      {title: 'Viruses & Worms', link: 'https://www.youtube.com/watch?v=83EIaRUxgmY'},
      {title: 'Ransomware & Crypto-Malware', link: 'https://www.youtube.com/watch?v=0dAXuG-WY7M'},
      {title: 'Trojans & RATs', link: 'https://www.youtube.com/watch?v=ib8Phu54VYc'},
      {title: 'Rootkits', link: 'https://www.youtube.com/watch?v=GpoWRVA4QXE'},
      {title: 'Keyloggers', link: 'https://www.youtube.com/watch?v=OqS6CDP8N2w'},
      {title: 'Adware & Spyware', link: 'https://www.youtube.com/watch?v=pO_ln-cSY0Y'},
      {title: 'Bots & Botnets', link: 'https://www.youtube.com/watch?v=5kA2ney8r1Y'},
      {title: 'Logic Bombs', link: 'https://www.youtube.com/watch?v=aUemRyeKJs4'},
    ],
    bullets: [{
      'Viruses': [],
      'Crypto-malware': [],
      'Ransomware': [],
      'Worm': [],
      'Trojan': [],
      'Rootkit': [],
      'Keylogger': [],
      'Adware': [],
      'Spyware': [],
      'Bots': [],
      'RAT': [],
      'Logic Bomb': [],
      'Backdoor': [],
    }]
  },
  {
    subNum: 1.2,
    subTitle: 'Compare and contrast types of attacks.',
    links: [
      {title: 'Phishing', link: 'https://www.youtube.com/watch?v=Y68_ZPlj6Ow'},
      {title: 'Tailgating and Impersonation', link: 'https://www.youtube.com/watch?v=7n10Bt6OtGY'},
      {title: 'Dumpster Diving', link: 'https://www.youtube.com/watch?v=jX6z6Ne4ekI'},
      {title: 'Shoulder Surfing', link: 'https://www.youtube.com/watch?v=gLKeYf2zLCQ'},
      {title: 'Hoaxes', link: 'https://www.youtube.com/watch?v=g0tjeIRZdU8'},
      {title: 'Watering Hole Attacks', link: 'https://www.youtube.com/watch?v=cqvaD2Do7UI'},
      {title: 'Principles of Social Engineering', link: 'https://www.youtube.com/watch?v=xrdYV7bXQVc'},
      {title: 'Denial of Service', link: 'https://www.youtube.com/watch?v=Y9LFN4Ajw6c'},
      {title: 'Buffer Overflows', link: 'https://www.youtube.com/watch?v=TSeqEN-ZXe4'},
      {title: 'Data Injection', link: 'https://www.youtube.com/watch?v=81yiRyGG29Y'},
      {title: 'Cross-site Scripting - XSS', link: 'https://www.youtube.com/watch?v=AjsYOMatAcg'},
      {title: 'Cross-site Request Forgery', link: 'https://www.youtube.com/watch?v=rbP2jwEDlBM'},
      {title: 'Privilege Escalation', link: 'https://www.youtube.com/watch?v=KDIfL6meNQs'},
      {title: 'DNS Poisoning & Domain Hijacking', link: 'https://www.youtube.com/watch?v=c76GbfM_QsI'},
      {title: 'Zero-Day Attacks', link: 'https://www.youtube.com/watch?v=0zeEGYENgoo'},
      {title: 'Replay Attacks', link: 'https://www.youtube.com/watch?v=jy8USm8pIYM'},
      {title: 'Client Hijacking Attacks', link: 'https://www.youtube.com/watch?v=f2VK7jq-s5A'},
      {title: 'Driver Manipulation', link: 'https://www.youtube.com/watch?v=yQb2A-KoA6Y'},
      {title: 'Wireless Replay Attacks', link: 'https://www.youtube.com/watch?v=1Mx4Ld7PF0s'},
      {title: 'Rogue Access Points and Evil Twins', link: 'https://www.youtube.com/watch?v=XqAn2iR9Cc0'},
      {title: 'Wireless Jamming', link: 'https://www.youtube.com/watch?v=wqq_uWVqFso'},
      {title: 'WPS Attacks', link: 'https://www.youtube.com/watch?v=drHyM--ZY5c'},
      {title: 'Bluejacking and Bluesnarfing', link: 'https://www.youtube.com/watch?v=ofTKPoLOxnA'},
      {title: 'RFID & NFC Attacks', link: 'https://www.youtube.com/watch?v=GXck1pf7-KE'},
      {title: 'Wireless Disassociation Attacks', link: 'https://www.youtube.com/watch?v=nRIND-GNiLM'},
      {title: 'Cryptographic Attacks', link: 'https://www.youtube.com/watch?v=wjcT1A2CGJo'},
      {title: 'Bluejacking and Bluesnarfing', link: 'https://www.youtube.com/watch?v=ofTKPoLOxnA'},
    ],
    bullets: [{
      'Social Engineering': [
        'Phishing',
        'Spear phishing',
        'Whaling',
        'Vishing',
        'Tailgating',
        'Impersonation',
        'Dumpster diving',
        'Shoulder surfing',
        'Hoax',
        'Watering hole attack',
        'Principles (reasons for effectiveness)'
      ],
      'Application/service attacks': [
        'DoS',
        'DDoS',
        'Man-in-the-middle',
        'Buffer overflow',
        'Injection',
        'Cross-site scripting',
        'Cross-site request forgery',
        'Privilege escalation',
        'ARP poisoning',
        'Amplification',
        'DNS poisoning',
        'Domain hijacking',
        'Man-in-the-browser',
        'Zero day',
        'Replay',
        'Pass the hash',
        'Hijacking and related attacks',
        'Driver manipulation',
        'MAC spoofing',
        'IP spoofing',
      ],
      'Wireless attacks': [
        'Replay',
        'IV',
        'Evil twin',
        'Rogue AP',
        'Jamming',
        'WPS',
        'Bluejacking',
        'Bluesnarfing',
        'RFID',
        'NFC',
        'Disassociation'
      ],
      'Cryptographic attacks': [
        'Birthday',
        'Known plain text/cipher text',
        'Rainbow tables',
        'Dictionary',
        'Brute force',
        'Collision',
        'Downgrade',
        'Replay',
        'Weak implementations'
      ]
    }]
  },
  {
    subNum: 1.3,
    subTitle: 'Explain threat actor types and attributes.',
    links: [
      {title: 'Threat Actors', link: 'https://www.youtube.com/watch?v=_c61C63lFMg'}
    ],
    bullets: [{
      'Typical actors': [
        'Script kiddies',
        'Hacktivist',
        'Organized crime',
        'Nation states/APT',
        'Insiders',
        'Competitors'
      ],
      'Attributes of actors': [
        'Internal/external',
        'Level of sophistication',
        'Resources/funding',
        'Intent/motivation'
      ],
      'Use of open-source intelligence': []
    }]
  },
  {
    subNum: 1.4,
    subTitle: 'Explain penetration testing concepts.',
    links: [
      {title: 'Penetration Testing', link: 'https://www.youtube.com/watch?v=AbVbqF-UmHc'},
    ],
    bullets: [{
      'Active reconnaissance': [],
      'Passive reconnaissance': [],
      'Pivot': [],
      'Initial exploitation': [],
      'Persistence': [],
      'Escalation of privilege': [],
      'Black box': [],
      'White box': [],
      'Gray box': [],
      'Penetration testing vs. vulnerability scanning': []
    }]
  },
  {
    subNum: 1.5,
    subTitle: 'Explain vulnerability scanning concepts.',
    links: [
      {title: 'Vulnerability Scanning', link: 'https://www.youtube.com/watch?v=HukLd-6C4Ew'}
    ],
    bullets: [{
      'Passively test security controls': [],
      'Identify vulnerability': [],
      'Identify lack of security controls': [],
      'Identify common misconfigurations': [],
      'Intrusive vs. non-intrusive': [],
      'Credentialed vs. non-credentialed': [],
      'False positive': []
    }]
  },
  {
    subNum: 1.6,
    subTitle: 'Explain the impact associated with types of vulnerabilities.',
    links: [
      {title: 'Vulnerability Types', link: 'https://www.youtube.com/watch?v=1UNCDsrDTu4'}
    ],
    bullets: [{
      'Race conditions': [],
      'Vulnerabilities due to:': [
        'End-of-life systems',
        'Embedded systems',
        'Lack of vendor support'
      ],
      'Improper input handling': [],
      'Improper error handling': [],
      'Misconfiguration/weak configuration': [],
      'Default configuration': [],
      'Resource exhaustion': [],
      'Untrained users': [],
      'Improperly configured accounts': [],
      'Vulnerable business processes': [],
      'Weak cipher suites and implementations': [],
      'Memory/buffer vulnerability': [
        'Memory leak',
        'Integer overflow',
        'Buffer overflow',
        'Pointer dereference',
        'DLL injection'
      ],
      'System sprawl/undocumented assets': [],
      'Architecture/design weaknesses': [],
      'New threats/zero day': [],
      'Improper certificate and key management': []
    }]
  }]
}];

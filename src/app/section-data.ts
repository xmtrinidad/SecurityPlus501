import {
  Section
} from './section';

export const SECTIONS: Section[] = [{
  num: 1,
  title: '1.0 Threats, Attacks and Vulnerabilities',
  color: '#0090ba',
  icon: 'fa-exclamation-triangle',
  link: '',
  subsections: [{
    subNum: 1.1,
    subTitle: 'Given a scenario, analyze indicators of compromise and determine the type of malware.',
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

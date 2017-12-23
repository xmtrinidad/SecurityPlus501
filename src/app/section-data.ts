import { Section } from './section';

const sectionOne = {
  num: 1,
  title: '1.0 Threats, Attacks & Vulnerabilities',
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
      
      'Improper input handling': [],
      'Improper error handling': [],
      'Misconfiguration/weak configuration': [],
      'Default configuration': [],
      'Resource exhaustion': [],
      'Untrained users': [],
      'Improperly configured accounts': [],
      'Vulnerable business processes': [],
      'System sprawl/undocumented assets': [],
      'Architecture/design weaknesses': [],
      'New threats/zero day': [],
      'Improper certificate and key management': [],
      'Weak cipher suites and implementations': [],
      'Vulnerabilities due to:': [
        'End-of-life systems',
        'Embedded systems',
        'Lack of vendor support'
      ],
      'Memory/buffer vulnerability': [
        'Memory leak',
        'Integer overflow',
        'Buffer overflow',
        'Pointer dereference',
        'DLL injection'
      ]
    }]
  }]
};

const sectionTwo = {
  num: 2,
  title: '2.0 Technologies & Tools',
  color: '#c1d42f',
  icon: 'fa-lock',
  subsections: [
    {
    subNum: 2.1,
    subTitle: 'Install/configure network components, both hardware & software-based, to support organizational security.',
    links: [
       {title: 'Firewalls', link: 'https://www.youtube.com/watch?v=mDKKqPxMpb0'},
       {title: 'VPN Concentrators', link: 'https://www.youtube.com/watch?v=sxBQZQM-RNk'},
       {title: 'Network Intrusion Detection and Prevention', link: 'https://www.youtube.com/watch?v=hEgWPWIuq_s'},
       {title: 'Router and Switch Security', link: 'https://www.youtube.com/watch?v=I7Tmo1RgF3E'},
       {title: 'Proxies', link: 'https://www.youtube.com/watch?v=I7yyVNQzRuo'},
       {title: 'Load Balancers', link: 'https://www.youtube.com/watch?v=NHhuVpD6LyU'},
       {title: 'Access Points', link: 'https://www.youtube.com/watch?v=-I3KAqMQljo'},
       {title: 'SIEM', link: 'https://www.youtube.com/watch?v=3JTjVa0IM7o'},
       {title: 'Proxies', link: 'https://www.youtube.com/watch?v=I7yyVNQzRuo'},
       {title: 'Network Access Control', link: 'https://www.youtube.com/watch?v=gtZUHYvRFUY'},
       {title: 'Mail Gateways', link: 'https://www.youtube.com/watch?v=N3S5vbfk70k'},
       {title: 'Date Loss Prevention', link: 'https://www.youtube.com/watch?v=jf-GSmiQZgw'},
       {title: 'Other Security Devices', link: 'https://www.youtube.com/watch?v=vGI_TylnBuc'}
    ],
    bullets: [{
      'Firewall': [
        'ACL',
        'Application-based vs. network-based',
        'Stateful vs. stateless',
        'Implicit deny'
      ],
      'VPN concentrator': [
        'Remote access vs. site-to-site',
        'IPSec',
        'Split tunnel vs. full tunnel',
        'TLS',
        'Always-on VPN'
      ],
      'NIPS/NIDS': [
        'Signature-based',
        'Heuristic/behavioral',
        'Anomaly',
        'Inline vs. passive',
        'In-band vs. out-of-band',
        'Rules',
        'Analytics'
      ],
      'SIEM': [
        'Aggregation',
        'Correlation',
        'Automated alerting and triggers',
        'Time synchronization',
        'Event deduplication',
        'Logs/WORM'
      ],
      'Switch': [
        'Port security',
        'Layer 2 vs. Layer 3',
        'Loop prevention',
        'Flood guard'
      ],
      'Proxy': [
        'Forward and reverse proxy',
        'Transparent',
        'Application/multipurpose'
      ],
      'Load Balancer': [
        'Scheduling',
        'Affinity',
        'Round-robin',
        'Active-passive',
        'Active-active',
        'Virtual IPs'
      ],
      'Access point': [
        'SSID',
        'MAC filtering',
        'Signal strength',
        'Band selection/width',
        'Antenna types and placement',
        'Fat vs. thin',
        'Controller-based vs. standalone'
      ],
      'Router': [
        'ACLs',
        'Antispoofing'
      ],
      'DLP': [
        'USB blocking',
        'Cloud-based',
        'Email'
      ],
      'NAC': [
        'Dissolvable vs. permanent',
        'Host health checks',
        'Agent vs. agentless'
      ],
      'Mail gateway': [
        'Spam filter',
        'DLP',
        'Encryption'
      ],
      'Bridge': [],
      'SSL/TLS accelerators': [],
      'SSL decryptors': [],
      'Media gateway': [],
      'Hardware security module': [],
    }]
  },
  {
    subNum: 2.2,
    subTitle: 'Given a scenario, use appropriate software tools to assess the security posture of an organization.',
    links: [
      {title: 'Software Security Tools', link: 'https://www.youtube.com/watch?v=OXpO5bAL6Ew'},
      {title: 'Command Line Security Tools', link: 'https://www.youtube.com/watch?v=octwJaf6vAM'}
    ],
    bullets: [{
      ' Protocol analyzer': [],
      'Network scanners': [
        'Rogue system detection',
        'Network mapping',
      ],
      'Wireless scanners/cracker': [],
      'Password cracker': [],
      'Vulnerability scanner': [],
      'Configuration compliance scanner': [],
      'Exploitation frameworks': [],
      'Steganography tools': [],
      'Honeypot': [],
      'Backup utilities': [],
      'Banner grabbing': [],
      'Passive vs active': [],
      'Command line tools': [
        'ping',
        'netstat',
        'tracert',
        'nslookup/dig',
        'arp',
        'ipconfig/ip/ifconfig',
        'tcpdump',
        'nmap',
        'netcat'
      ]
    }]
  },
  {
    subNum: 2.3,
    subTitle: 'Given a scenario, troubleshoot common security issues.',
    links: [
      {title: 'Common Security Issues', link: 'https://www.youtube.com/watch?v=JQYC5UMfYJw'},
      {title: 'Common Security Issues', link: 'https://www.youtube.com/watch?v=JQYC5UMfYJw'}
    ],
    bullets: [{
      'Unencrypted credentials/clear text': [],
      'Logs and events anomalies': [],
      'Permission issues': [],
      'Access violations': [],
      'Certificate issues': [],
      'Data exfiltration': [],
      'Weak security configurations': [],
      'Unauthorized software': [],
      'Personnel issues': [
        'Policy violation',
        'Insider threat',
        'Social engineering',
        'Social media',
        'Personal email'
      ],
      'Misconfigured devices': [
        'Firewall',
        'Content filter',
        'Access points'
      ],
      'Baseline deviation': [],
      'License compliance violation (availability/integrity)': [],
      'Asset management': [],
      'Authentication issues': []
    }]
  },
  {
    subNum: 2.4,
    subTitle: 'Given a scenario, analyze & interpret output from security technologies.',
    links: [
      {title: 'Analyzing Security Output', link: 'https://www.youtube.com/watch?v=pDPZpsc0iLs'},
    ],
    bullets: [{
      'HIDS/HIPS': [],
      'Antivirus': [],
      'File integrity check': [],
      'Host-based firewall': [],
      'Application whitelisting': [],
      'Removable media control': [],
      'Advanced malware tools': [],
      'Patch management tools': [],
      'UTM': [],
      'DLP': [],
      'Data execution prevention': [],
      'Web application firewall': []
    }]
  },
  {
    subNum: 2.5,
    subTitle: 'Given a scenario, deploy mobile devices securely. ',
    links: [
      {title: 'Mobile Device Connection Methods', link: 'https://www.youtube.com/watch?v=vXuHlaOWL6A'},
      {title: 'Mobile Device Management', link: 'https://www.youtube.com/watch?v=92ElSmHXECU'},
      {title: 'Mobile Device Enforcement', link: 'https://www.youtube.com/watch?v=CKgXPNEg8Jg'},
      {title: 'Mobile Device Deployment Models', link: 'https://www.youtube.com/watch?v=IuA-Go5q9QQ'},
    ],
    bullets: [{
      'Connection methods': [
        'Cellular',
        'WiFi',
        'SATCOM',
        'Bluetooth',
        'NFC',
        'ANT',
        'Infrared',
        'USB'
      ],
      'Mobile device management concepts': [
        'Application management',
        'Content management',
        'Remote wipe',
        'Geofencing',
        'Geolocation',
        'Screen locks',
        'Push notification services',
        'Passwords and pins',
        'Biometrics',
        'Context-aware authentication',
        'Containerization',
        'Storage segmentation',
        'Full device encryption'
      ],
      'Enforcement and monitoring for:': [
        'Third-party app stores',
        'Rooting/jailbreaking',
        'Sideloading',
        'Custom firmware',
        'Carrier unlocking',
        'Firmware OTA updates',
        'Camera use',
        'SMS/MMS',
        'External media',
        'USB OTG',
        'Recording microphone',
        'GPS tagging',
        'WiFi direct/ad hoc',
        'Tethering',
        'Payment methods'
      ],
      'Deployment models': [
        'BYOD',
        'COPE',
        'CYOD',
        'Corporate-owned',
        'VDI'
      ]
    }]
  },
  {
    subNum: 2.6,
    subTitle: 'Given a scenario, implement secure protocols.',
    links: [
      {title: 'Secure Protocols', link: 'https://www.youtube.com/watch?v=okz3LMTw0YY'}
    ],
    bullets: [{
      'Protocols': [
        'DNSSEC',
        'SSH',
        'S/MIME',
        'SRTP',
        'LDAPS',
        'FTPS',
        'SFTP',
        'SNMPv3',
        'SSL/TLS',
        'HTTPS',
        'Secure POP/IMAP'
      ],
      'Use cases': [
        'Voice and video',
        'Time synchronization',
        'Email and web',
        'File transfer',
        'Directory services',
        'Remote access',
        'Domain name resolution',
        'Routing and switching',
        'Network address allocation',
        'Subscription services'
      ]
    }]
  }]
};

const sectionThree = {
  num: 3,
  title: '3.0 Architecture and Design',
  color: '#f36c23',
  icon: 'fa-pencil',
  subsections: [
    {
      subNum: 3.1,
      subTitle: 'Explain use cases & purpose for frameworks, best practices & secure configuration guides.',
      links: [
        {title: 'Compliance and Frameworks', link: 'https://www.youtube.com/watch?v=JndVtgKf9IE'},
        {title: 'Secure Configuration Guides', link: 'https://www.youtube.com/watch?v=NViJR3ozfiQ'},
        {title: 'Defense-in-Depth', link: 'https://www.youtube.com/watch?v=HLQ4wX8NxQY'}
      ],
      bullets: [{
        'Industry-standard frameworks and reference architectures': [
          'Regulatory',
          'Non-regulatory',
          'National vs. international',
          'Industry-specific frameworks'
        ],
        'Benchmarks/secure configuration guides': [
          'Platform/vendor-specific guides',
          'Web server',
          'Operating system',
          'Application server',
          'Network infrastructure devices',
          'General purpose guides'
        ],
        'Defense-in-depth/layered security': [
          'Vendor diversity',
          'Control diversity',
          'Administrative',
          'Technical',
          'User training'
        ]
      }]
    },
    {
      subNum: 3.2,
      subTitle: 'Given a scenario, implement secure network architecture concepts.',
      links: [
        {title: 'Secure Network Topologies', link: 'https://www.youtube.com/watch?v=ZluKkoJPIE0'},
        {title: 'Network Segmentation', link: 'https://www.youtube.com/watch?v=0i1CN8b1ZKQ'},
        {title: 'VPN Technologies', link: 'https://www.youtube.com/watch?v=tuVwJsFJtr8'},
        {title: 'Security Technology Placement', link: 'https://www.youtube.com/watch?v=5yDrpQWBz6M'},
        {title: 'Securing SDN', link: 'https://www.youtube.com/watch?v=Ysxl3qzaSZ0'}
      ],
      bullets: [{
        'Zones/topologies': [
          'DMZ',
          'Extranet',
          'Intranet',
          'Wireless',
          'Guest',
          'Honeynets',
          'NAT',
          'Ad hoc'
        ],
        'Segregation/segmentation/isolation': [
          'Physical',
          'Logical (VLAN)',
          'Virtualization',
          'Air gaps'
        ],
        'Tunneling/VPN': [
          'Site-to-site',
          'Remote access'
        ],
        'Security device/technology placement': [
          'Sensors',
          'Collectors',
          'Correlation engines',
          'Filters',
          'Proxies',
          'Firewalls',
          'VPN concentrators',
          'SSL accelerators',
          'Load balancers',
          'DDoS mitigator',
          'Aggregation switches',
          'Taps and port mirror'
        ],
        'SDN': []
      }]
    },
    {
      subNum: 3.3,
      subTitle: 'Given a scenario, implement secure systems design.',
      links: [
        {title: 'Hardware Security', link: 'https://www.youtube.com/watch?v=MdLKu4t_RwU'},
        {title: 'Operating System Security', link: 'https://www.youtube.com/watch?v=fAhvVqw_dus'},
        {title: 'Peripheral Security', link: 'https://www.youtube.com/watch?v=SYU9rWCIHr4'}
      ],
      bullets: [{
        'Hardware/firmware security': [
          'FDE/SED',
          'TPM',
          'HSM',
          'UEFI/BIOS',
          'Secure boot and attestation',
          'Supply chain',
          'Hardware root of trust',
          'EMI/EMP'
        ],
        'Operating systems': [
          'Network',
          'Server',
          'Workstation',
          'Appliance',
          'Kiosk',
          'Mobile OS',
          'Patch management',
          'Disabling unnecessary ports & services',
          'Least functionality',
          'Secure configurations',
          'Trusted operating system',
          'Application whitelisting/blacklisting',
          'Disable default accounts/passwords'

        ],
        'Peripherals': [
          'Wireless keyboards',
          'Wireless mice',
          'Displays',
          'WiFi-enabled MicroSD cards',
          'Printers/MFDs',
          'External storage devices',
          'Digital cameras'
        ]
      }]
    },
    {
      subNum: 3.4,
      subTitle: 'Explain the importance of secure staging deployment concepts.',
      links: [
        {title: 'Secure Deployments', link: 'https://www.youtube.com/watch?v=Vm3ABHDUG9w'}
      ],
      bullets: [{
        'Sandboxing': [],
        'Environment': [
          'Development',
          'Test',
          'Staging',
          'Production'
        ],
        'Secure baseline': [],
        'Integrity measurement': []
      }]
    },
    {
      subNum: 3.5,
      subTitle: 'Explain the security implications of embedded systems.',
      links: [
        {title: 'Embedded Systems', link: 'https://www.youtube.com/watch?v=U7pTByoPJF8'}
      ],
      bullets: [{
        'SCADA/ICS': [],
        'Camera systems': [],
        'HVAC': [],
        'SoC': [],
        'RTOS': [],
        'Printers/MFDs': [],
        'Smart devices/IoT': [
          'Wearable technology',
          'Home automation'
        ],
        'Special purpose': [
          'Medical devices',
          'Vehicles',
          'Aircraft/UAV'
        ],
      }]
    },
    {
      subNum: 3.6,
      subTitle: 'Summarize secure application development & deployment concepts.',
      links: [
        {title: 'Development Life Cycle Models', link: 'https://www.youtube.com/watch?v=iecyJnQovHw'},
        {title: 'Secure DevOps', link: 'https://www.youtube.com/watch?v=-b8X6Uh0LQQ'},
        {title: 'Version Control and Change Management', link: 'https://www.youtube.com/watch?v=iTYTgEBnfUM'},
        {title: 'Provisioning and Deprovisioning', link: 'https://www.youtube.com/watch?v=lqk6hcAIjVw'},
        {title: 'Secure Coding Techniques', link: 'https://www.youtube.com/watch?v=RTifWn01l2g'},
        {title: 'Code Quality and Testing', link: 'https://www.youtube.com/watch?v=pQdhsEVoHDA'}
      ],
      bullets: [{
        'Development life-cycle models': [
          'Waterfall vs. Agile'
        ],
        'Secure DevOps': [
          'Security automation',
          'Continuous integration',
          'Baselining',
          'Immutable systems',
          'Infrastructure as code'
        ],
        'Version control and change management': [],
        'Provisioning and deprovisioning': [],
        'Secure coding techniques': [
          'Proper error handling',
          'Proper input validation',
          'Normalization',
          'Stored procedures',
          'Code signing',
          'Encryption',
          'Obfuscation/camouflage',
          'Code reuse/dead code',
          'Server-side vs. client-side execution and validation',
          'Memory management',
          'Use of third-party libraries and SDKs',
          'Data exposure'
        ],
        'Code quality and testing': [
          'Static code analyzers',
          'Dynamic analysis (e.g., fuzzing)',
          'Stress testing',
          'Sandboxing',
          'Model verification'
        ],
        'Compiled vs. runtime code': []
      }]
    },
    {
      subNum: 3.7,
      subTitle: 'Summarize cloud and virtualization concepts.',
      links: [],
      bullets: [{
        'Hypervisor': [
          'Type I',
          'Type II',
          'Application cells/containers'
        ],
        'Cloud deployment models': [
          'SaaS',
          'PaaS',
          'IaaS',
          'Private',
          'Public',
          'Hybrid',
          'Community'
        ],
        'VM escape protection': [],
        'Cloud storage': [],
        'On-premise vs. hosted vs. cloud': [],
        'VDI/VDE': [],
        'Cloud access security broker': [],
        'Security as a Service': [],
      }],
    },
    {
      subNum: 3.8,
      subTitle: 'Explain how resiliency and automation strategies reduce risk.',
      links: [],
      bullets: [{
        'Automation/scripting': [
          'Automated courses of action',
          'Configuration monitoring',
          'Configuration validation'
        ],
        'Non-persistence': [
          'Snapshots',
          'Revert to known state',
          'Rollback to known configuration',
          'Live boot media'
        ],
        'Templates': [],
        'Master image': [],
        'Elasticity': [],
        'Scalability': [],
        'Distributive allocation': [],
        'Redundancy': [],
        'Fault tolerance': [],
        'High availability': [],
        'RAID': []
      }]
    },
    {
      subNum: 3.9,
      subTitle: 'Explain the importance of physical security controls.',
      links: [],
      bullets: [{
        'Lighting, Signs': [],
        'Fencing/gate/cage': [],
        'Security guards': [],
        'Alarms, Safe': [],
        'Protected distribution/Protected cabling': [],
        'Airgap, Mantrap': [],
        'Faraday cage': [],
        'Lock types': [],
        'Biometrics': [],
        'Barricades/bollards': [],
        'Tokens/cards': [],
        'Cable locks, Screen Filters': [],
        'Cameras, Motion detection': [],
        'Logs, Infrared detection': [],
        'Key management': [],
        'Environmental controls': [
          'HVAC',
          'Hot & cold aisles',
          'Fire suppression'
        ],
      }]
    }
  ]
};

const sectionFour = {
  num: 4,
  title: '4.0 Identity and Access Management',
  color: '#004e71',
  icon: 'fa-users',
  subsections: [
    {
      subNum: 4.1,
      subTitle: 'Compare and contrast identity & access management concepts',
      links: [],
      bullets: [{
        'Identification, authentication, authorization and accounting (AAA)': [],
        'Federation': [],
        'Single sign-on': [],
        'Transitive trust': [],
        'Multifactor authentication': [
          'Something you are',
          'Something you have',
          'Something you know',
          'Somewhere you are',
          'Something you do'
        ],
      }]
    },
    {
      subNum: 4.2,
      subTitle: 'Given a scenario, install/configure identity and access services.',
      links: [],
      bullets: [{
        'LDAP': [],
        'Kerberos': [],
        'TACACS+': [],
        'CHAP': [],
        'PAP': [],
        'MSCHAP': [],
        'RADIUS': [],
        'SAML': [],
        'OpenID Connect': [],
        'OAUTH': [],
        'Shibboleth': [],
        'Secure token': [],
        'NTLM': []
      }]
    },
    {
      subNum: 4.3,
      subTitle: 'Given a scenario, implement identity & access management controls.',
      links: [],
      bullets: [{
        'Access control models': [
          'MAC',
          'DAC',
          'ABAC',
          'Role-based access control',
          'Rule-based access control'
        ],
        'Physical access control': [
          'Proximity cards',
          'Smart cards'
        ],
        'Biometric factors': [
          'Fingerprint scanner',
          'Retinal scanner',
          'Iris scanner',
          'Voice recognition',
          'Facial recognition',
          'False acceptance rate',
          'False rejection rate',
          'Crossover error rate'
        ],
        'Tokens': [
          'Hardware',
          'Software',
          'HOTP/TOTP'
        ],
        'Certificate-based authentication': [
          'PIV/CAC/smart card',
          'IEEE 802.1X'
        ],
        'File system security': [],
        'Database security': []
      }]
    },
    {
      subNum: 4.4,
      subTitle: 'Given a scenario, differentiate common account management practices.',
      links: [],
      bullets: [{
        'General Concepts': [
          'Least privilege',
          'Onboarding/offboarding',
          'Permission auditing and review',
          'Usage auditing and review',
          'Time-of-day restrictions',
          'Recertification',
          'Standard naming convention',
          'Account maintenance',
          'Group-based access control',
          'Location-based policies'
        ],
        'Account policy enforcement': [
          'Credential management',
          'Group policy',
          'Password complexity',
          'Expiration',
          'Recovery',
          'Disablement',
          'Lockout',
          'Password history',
          'Password reuse',
          'Password length'
        ],
        'Account Types': [
          'User account',
          'Shared & generic',
          'Guest accounts',
          'Service accounts',
          'Privileged accounts'
        ],
      }]
    }
  ]
};

const sectionFive = {
  num: 5,
  title: '5.0 Risk Management',
  color: '#63a70a',
  icon: 'fa-clipboard',
  subsections: [
    {
      subNum: 5.1,
      subTitle: 'Explain the importance of policies, plans & procedures related to organizational security',
      links: [],
      bullets: [{
        'Agreement types': [
          'BPA',
          'SLA',
          'ISA',
          'MOU/MOA'
        ],
        'Personnel management': [
          'Mandatory vacations',
          'Job rotation',
          'Separation of duties',
          'Clean desk',
          'Background checks',
          'Exit interviews',
          'Role-based awareness training'
        ],
        'General security policies': [
          'Social media networks/applications',
          'Personal email'
        ],
        'Standard operating procedure': [],
      }]
    },
    {
      subNum: 5.2,
      subTitle: 'Summarize business impact analysis concepts.',
      links: [],
      bullets: [{
        'RTO/RPO': [],
        'MTBF': [],
        'MTTR': [],
        'Mission-essential functions': [],
        'Identification of critical systems': [],
        'Single point of failure': [],
        'Privacy impact assessment': [],
        'Privacy threshold assessment': [],
        'Impact': [
          'Life, Property',
          'Safety, Finance',
          'Reputation'
        ]
      }]
    },
    {
      subNum: 5.3,
      subTitle: 'Explain risk management processes and concepts.',
      links: [],
      bullets: [{
        'Three assessment': [
          'Environmental',
          'Manmade',
          'Internal vs external'
        ],
        'Risk assessment': [
          'SLE',
          'ALE',
          'ARO',
          'Asset value',
          'Risk register',
          'Likelihood of occurrence',
          'Supply chain assessment',
          'Impact',
          'Quantitative',
          'Qualitative',
          'Testing'
        ],
        'Risk response techniques': [
          'Accept',
          'Transfer',
          'Avoid',
          'Mitigate'
        ],
        'Change management': []
      }]
    },
    {
      subNum: 5.4,
      subTitle: 'Given a scenario, follow incident response procedures.',
      links: [],
      bullets: [{
        'Incident response plan': [
          'Documented incident types/category definitions',
          'Roles and responsibilities',
          'Reporting requirements/escalation',
          'Cyber-incident response teams',
          'Exercise'
        ],
        'Incident response process': [
          'Preparation',
          'Identification',
          'Containment',
          'Eradication',
          'Recovery',
          'Lessons learned'
        ]
      }]
    },
    {
      subNum: 5.5,
      subTitle: 'Summarize basic concepts of forensics.',
      links: [],
      bullets: [{
        'Order of volatility': [],
        'Chain of custody': [],
        'Preservation': [],
        'Recovery': [],
        'Data acquisition': [
          'Capture system image',
          'Network traffic and logs',
          'Capture video',
          'Record time offset',
          'Take hashes',
          'Screenshots',
          'Witness interviews'
        ],
        'Strategic intelligence/counterintelligence gathering': [
          'Active logging'
        ],
        'Track man-hours': []
      }]
    },
    {
      subNum: 5.6,
      subTitle: 'Explain disaster recovery & continuity of operation concepts.',
      links: [],
      bullets: [{
        'Recovery sites': [
          'Hot site',
          'Warm site',
          'Cold site'
        ],
        'Order of restoration': [],
        'Backup concepts': [
          'Differential',
          'Incremental',
          'Snapshots, Full'
        ],
        'Geographic considerations': [
          'Off-site backups',
          'Distance',
          'Location selection',
          'Legal implications',
          'Data sovereignty',
        ],
        'Continuity of operation planning': [
          'Exercises/tabletop',
          'After-action reports',
          'Failover',
          'Alternate processing sites',
          'Alternate business practices'
        ]
      }]
    },
    {
      subNum: 5.7,
      subTitle: 'Compare and contrast various types of controls.',
      links: [],
      bullets: [{
        'Deterrent': [],
        'Preventive': [],
        'Detective': [],
        'Corrective': [],
        'Compensating': [],
        'Technical': [],
        'Administrative': [],
        'Physical': [],
      }]
    },
    {
      subNum: 5.8,
      subTitle: 'Given a scenario, carry out data security & privacy practices.',
      links: [],
      bullets: [{
        'Data destruction and media sanitization': [
          'Burning, Shredding',
          'Pulping, Pulverizing',
          'Degaussing',
          'Purging, Wiping'
        ],
        'Data sensitivity labeling and handling': [
          'Confidential',
          'Private, Public',
          'Proprietary',
          'PII, PHI'
        ],
        'Data roles': [
          'Owner',
          'Steward/custodian',
          'Privacy officer'
        ],
        'Data retention': [],
        'Legal and compliance': [],
      }]
    }
  ]
};

const sectionSix = {
  num: 6,
  title: '6.0 Cryptography and PKI',
  color: '#f5a81c',
  icon: 'fa-user-secret',
  subsections: [
    {
      subNum: 6.1,
      subTitle: 'Compare and contrast basic concepts of cryptography.',
      links: [],
      bullets: [{
        'Symmetric algorithms': [],
        'Modes of operation': [],
        'Asymmetric algorithms': [],
        'Hashing': [],
        'Salt, IV, nonce': [],
        'Elliptic curve': [],
        'Weak/deprecated algorithms': [],
        'Key exchange': [],
        'Digital signatures': [],
        'Diffusion': [],
        'Confusion': [],
        'Collision': [],
        'Steganography': [],
        'Obfuscation': [],
        'Stream vs. block': [],
        'Key strength': [],
        'Session keys': [],
        'Ephemeral key': [],
        'Secret algorithm': [],
        'Data-in-transit': [],
        'Data-at-rest': [],
        'Data-in-use': [],
        'Random/pseudo-random number generation': [],
        'Key stretching': [],
        'Perfect forward secrecy': [],
        'Security through obscurity': [],
        'Implementation vs. algorithm selection': [
          'Crypto service provider',
          'Crypto modules'
        ],
        'Common use cases': [
          'Low power devices',
          'Low latency',
          'High resiliency',
          'Supporting confidentiality',
          'Supporting integrity',
          'Supporting obfuscation',
          'Supporting authentication',
          'Supporting non-repudiation',
          'Resource vs. security constraints'
        ]
      }]
    },
    {
      subNum: 6.2,
      subTitle: 'Explain cryptography algorithms & their basic characteristics.',
      links: [],
      bullets: [{
        'Symmetric algorithms': [
          'AES',
          'DES',
          '3DES',
          'RC4',
          'Blowfish/Twofish'
        ],
        'Cipher modes': [
          'CBC',
          'GCM',
          'ECB',
          'CTR',
          'Stream vs. block'
        ],
        'Asymmetric algorithms': [
          'RSA',
          'DSA',
          'Diffie-Hellman (DHE, ECDHE)',
          'Elliptic curve',
          'PGP/GPG'
        ],
        'Hashing algorithms': [
          'MD5',
          'SHA',
          'HMAC',
          'RIPEMD'
        ],
        'Key stretching algorithms': [
          'BCRYPT',
          'PBKDF2'
        ],
        'Obfuscation': [
          'XOR, ROT13',
          'Substitution ciphers'
        ],
      }]
    },
    {
      subNum: 6.3,
      subTitle: 'Given a scenario, install & configure wireless security settings.',
      links: [],
      bullets: [{
        'Cryptographic protocols': [
          'WPA',
          'WPA2',
          'CCMP',
          'TKIP'
        ],
        'Authentication protocols': [
          'EAP, PEAP',
          'EAP-FAST',
          'EAP-TLS',
          'EAP-TTLS',
          'IEEE 802.1X',
          'RADIUS Federation'
        ],
        'Methods': [
          'PSK vs. Enterprise vs. Open',
          'WPS',
          'Captive portals'
        ],
      }]
    },
    {
      subNum: 6.4,
      subTitle: 'Given a scenario, implement public key infrastructure.',
      links: [],
      bullets: [{
        'Components': [
          'CA',
          'Intermediate CA',
          'CRL, OCSP, CSR',
          'Certificate',
          'Public key',
          'Private key',
          'Object identifiers (OID)',
        ],
        'Concepts': [
          'Online vs. offline CA',
          'Stapling, Pinning',
          'Trust model',
          'Key escrow',
          'Certificate chaining'
        ],
        'Types of certificates': [
          'Wildecard, SAN',
          'Code signing',
          'Self-signed',
          'Machine/computer',
          'Email, User, Root',
          'Domain validation',
          'Extended validation'
        ],
        'Certificate formats': [
          'DER, PEM, PFX',
          'CER, P12, P7B'
        ],
      }]
    }
  ]
};


export const SECTIONS: Section[] = [
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive,
  sectionSix
];

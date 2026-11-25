// CV shown on the unlisted page /cv/ and rendered to its PDF (scripts/cv-pdf.sh). Wording from the maintainer's
// 2026 resume (PDF export), with light fixes only: obvious typos and PDF-extraction hyphens, "12+" → "15+ years"
// (maintainer, 2026-11-25), "(en cours)" → "(in progress)", the two Worldline leadership programmes grouped
// (maintainer, 2026-11-25); current Valeo role rewritten from the maintainer's notes (2026-11-25: CoE lead role
// stated as a fact, not a title; spend as "eight-figure", no exact figure).
// PRIVACY (CLAUDE.md, "Personal data"): no postal address, phone number or email here, ever. Contact = LinkedIn and
// GitHub only. The full name appears on this page and its PDF only; the landing page stays "François G.".

export interface CvLink {
  label: string;
  href: string;
  /** Shown in print and in the PDF, where the link cannot be clicked. */
  text: string;
  icon: 'linkedin' | 'github';
}

export interface FocusList {
  title: string;
  items: string[];
}

export interface Role {
  /** "2026/03 – now", as in the resume. */
  period: string;
  title: string;
  org: string;
  place: string;
  /** Paragraphs under the title. */
  intro: string[];
  /** Titled lists of short items ("Key focus areas", "Cloud Center of Excellence"); one list or several. */
  focus?: FocusList | FocusList[];
  /** Achievements, one bullet each. */
  bullets?: string[];
}

export interface Step {
  label: string;
  done: boolean;
}

export interface Education {
  year: string;
  title: string;
  /** Programme progress, shown as a row of steps (web) or a plain line (print/PDF). Update `done` after each step. */
  steps?: Step[];
  /** Lines under the title (programme, modules). */
  details?: string[];
}

export interface Cv {
  /** false: the CV is unlisted (no link from the home page or header). Flip to true to link it from the home page. */
  linkedFromHome: boolean;
  fullName: string;
  headline: string;
  tagline: string;
  summary: string;
  links: CvLink[];
  experience: Role[];
  education: Education[];
  certifications: string;
  /** Path of the PDF under `public/` (generated from this page by scripts/cv-pdf.sh). */
  pdf: string;
}

export const cv: Cv = {
  linkedFromHome: false,
  fullName: 'François Guillon',
  headline: 'Director Site Reliability, Infrastructure & Platform Engineering',
  tagline:
    'Driving large-scale digital transformation at the intersection of operations, governance and business-critical platforms.',
  summary:
    'Senior infrastructure and platform engineering leader with 15+ years of experience, including 7+ years building ' +
    'and leading SRE, platform and shared-services organizations at scale in highly regulated, mission-critical ' +
    'industries. Proven track record operating payment platforms processing 10–30 billion transactions per year under ' +
    'PCI-DSS / PCI-P2PE / PCI-PIN, sustaining 99.98%+ availability while scope, product portfolio and team size ' +
    'expanded. Recognized internally as a reliability practice evangelist: SRE standards I introduced were ' +
    'progressively adopted across product lines (Worldline) and scaled from a single Center of Excellence to an ' +
    'entire R&D organization and now a multi-cloud Group platform (Valeo) — each step driven by organizational pull, ' +
    'not mandate. Combine deep technical credibility (network, security/cryptography, database operations, ' +
    'multi-cloud) with people-first leadership: building high-performing teams, raising organizational maturity, and ' +
    'operating as facilitator and arbitrator across business, engineering and operations stakeholders.',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francois-g', text: 'linkedin.com/in/francois-g', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/francoisgn', text: 'github.com/francoisgn', icon: 'github' },
  ],
  experience: [
    {
      period: '2026/03 – now',
      title: 'Group Cloud Platform Manager',
      org: 'Valeo / Group IS',
      place: 'Paris, France',
      intro: [
        'Leading the Group Cloud Center of Excellence since 2026/03: AWS, GCP and Alibaba Cloud landing zones, ' +
          'platform engineering and FinOps for an eight-figure annual cloud spend, in a regulated environment ' +
          '(ISO 27001, TISAX). Accountable for the shift from fragmented IaC-only delivery to an integrated Internal ' +
          'Developer Platform (IDP) and a streamlined developer experience.',
      ],
      focus: [
        {
          title: 'Cloud Center of Excellence',
          items: [
            'Lead 20–30 cloud engineers and architects across France and India, and manage the MSPs',
            'GCP: landing zone deployment; takeover of a legacy GCP estate, brought back on track',
            'AWS: landing zone management and evolution',
            'Alibaba Cloud: onboarding of the China landing zone into group systems',
            'Multi-cloud strategy: from single to multi-cloud, preparing the China and EU sovereign clouds',
          ],
        },
        {
          title: 'Platform Engineering',
          items: [
            'Org policies and IDP: self-service policies, access management',
            'Centralised FinOps: cost analytics beyond spend reporting, GCP CUDs and AWS Savings Plans, on-demand and ' +
              'scheduled environments, advisory register',
            'AI-ready software factory: new VCS, CI/CD, gates and guardrails; IaC, configuration-, governance- and ' +
              'network-as-code; knowledge management and agile planning; monitoring; communication human ↔ human, ' +
              'human ↔ agent, agent ↔ agent',
            'Preferred infrastructure and cloud counterpart, delivered as a service, for the AI programme (AI4All), ' +
              'Valeo Services and the Data Platform',
          ],
        },
      ],
    },
    {
      period: '2025/04 – 2026/03',
      title: 'R&D DSIS Cloud Central Platform Engineering Manager',
      org: 'Valeo / R&D DSIS',
      place: 'Créteil, France',
      intro: [
        'Accountable for the design, governance and evolution of the Cloud Central Platform within Valeo R&D DSIS, ' +
          'supporting a large-scale internal Valeo R&D developer ecosystem.',
        'Initially focused on stabilizing and structuring core platform capabilities, building on proven SRE and ' +
          'operational initiatives, the scope progressively expanded to a transversal role across R&D DSIS, providing ' +
          'higher leverage to standardize practices, steer platform decisions and scale adoption.',
      ],
      focus: {
        title: 'Key focus areas',
        items: [
          'Transversal digital transformation across R&D DSIS',
          'Industrialization and governance of shared digital services',
          'Alignment between business priorities, cost constraints and execution capacity',
          'Change management across engineering, operations and IT stakeholders',
        ],
      },
      bullets: [
        'Defined and deployed a transversal operating model to industrialize digital platforms across R&D DSIS, ' +
          'aligning reliability, cost, governance and business constraints.',
        'Scaled proven platform and operational initiatives beyond the initial perimeter, while introducing ' +
          'platform-level governance to reduce duplication, improve efficiency and align operational decisions with ' +
          'business and industrial constraints.',
        'Established and governed transversal platform processes across R&D DSIS, including ITSM and global incident ' +
          'management, to align CoEs on common reliability, availability and operational standards.',
        'Established financial and capacity governance mechanisms to align digital platform consumption with ' +
          'business priorities and cost constraints.',
        'Drove platform automation initiatives (CI/CD, GitOps, IaC) to improve reliability, consistency and ' +
          'operational efficiency.',
        'Defined and introduced multi-cloud and cloud-agnostic platform capabilities (CI/CD, configuration ' +
          'management, IaC).',
      ],
    },
    {
      period: '2023/05 – 2026/03',
      title: 'SysOps, Site Reliability Engineering (SRE) and IT Coordination Manager',
      org: 'Valeo / R&D DSIS CoE Software Foundry',
      place: 'Créteil, France',
      intro: [
        'Led transversal operational transformation initiatives to improve service reliability, accountability and ' +
          'production readiness across multiple business-critical platforms.',
        'This role laid the operational and reliability foundations later leveraged to structure and govern the R&D ' +
          'DSIS Cloud Central Platform at scale.',
      ],
      bullets: [
        'Built and led SysOps and SRE teams operating business-critical cloud platforms and shared services, with ' +
          '24/7 on-call and incident response responsibilities.',
        'Defined operational standards and accountability models to improve production readiness and decision-making ' +
          'across teams.',
        'Improved platform reliability and availability by standardizing operational processes, monitoring, alerting ' +
          'and capacity management.',
        'Led crisis management and executive-level post-incident reviews, driving organizational learning and ' +
          'accountability.',
        'Collaborated closely with engineering and product teams to improve production readiness, deployment safety ' +
          'and operational ownership.',
        'Initiated early cloud cost optimization and operational efficiency practices at operational level, later ' +
          'scaled through platform governance.',
      ],
    },
    {
      period: '2021/09 – 2023/03',
      title: 'Shared Services, SRE & Platform Operations Leadership',
      org: 'Ingenico / Worldline / MS / CTO',
      place: 'Paris, France',
      intro: [
        'Following the acquisition of Ingenico by Worldline, I extended and scaled an existing SRE and platform ' +
          'operating model to a broader group-level shared services perimeter, supporting additional products, teams ' +
          'and business critical services.',
        'My role focused on integrating heterogeneous services into a unified, reliable and governable operational ' +
          'framework, while raising the level of rigor required to operate at Worldline scale.',
      ],
      focus: {
        title: 'Key focus areas',
        items: [
          'Digital and operational transformation in industrial environments',
          'Transversal governance and operation model design',
          'Alignment between business strategy and execution capacity',
          'Change management across operations, IT and business teams',
          'Cost, performance and reliability governance at scale',
        ],
      },
      bullets: [
        'Strengthening operational governance through the systematic introduction of Production Readiness Reviews, ' +
          'SLI/SLO/SLA frameworks and service ownership models.',
        'Auditing and assessing existing platforms and development practices, driving changes in delivery, ' +
          'operational and reliability standards in close collaboration with engineering teams.',
        'Influencing governance and technical decision-making to align development practices with production and ' +
          'availability constraints.',
        'Driving move-to-cloud initiatives (private and public cloud) to integrate newly onboarded services and ' +
          'improve scalability and resilience.',
        'This scope operated under strong business constraints, with 24/7, multi-layer on-call coverage and ' +
          'availability targets up to 99.98% on platforms supporting ~10+ billion transactions per year on ' +
          'mission-critical payment services.',
      ],
    },
    {
      period: '2019/09 – 2021/09',
      title: 'Shared Services Operations SRE Manager',
      org: 'Ingenico / MS / CTO',
      place: 'Paris, France',
      intro: [
        'Consolidating and scaling multiple business-critical transversal platforms under the first SRE organization ' +
          "to move to full 24/7 support, regrouping the payment chain's most critical, real-time products. Operating " +
          'under PCI-DSS, PCI-P2PE and PCI-PIN at ~30 billion transactions/year. Standards introduced here became the ' +
          'group reference, with adoption driven organically rather than mandated.',
        'Services including cryptography, tokenization, settlement and transaction routing services - into a ' +
          'unified, highly automated and reliability-driven operating model, as transaction volumes and product ' +
          'adoption expanded rapidly.',
        'Transitioning from individual technical leadership and contribution to organizational ownership, combining ' +
          'people management, platform reliability and industrial-grade automation in a fast paced and highly ' +
          'regulated payment environment.',
      ],
      bullets: [
        'Building and leading a multidisciplinary SRE organization (~15–18 engineers), combining SREs, PostgreSQL and ' +
          'Oracle DBAs, and senior ICs.',
        'Establishing a 100% automated, GitOps-driven operating model, leveraging PaaS foundations.',
        'Operations platforms executing hundreds to ~1,000 production pipelines, from configuration changes to ' +
          'complex multi-node, multi-datacenter deployments (load balancing, failover, traffic management).',
        'Delivering a state-of-the-art monitoring and 24/7 multi-layer on-call operations.',
        'Driving collaboration with development and infrastructure teams, enforcing very high standards through ' +
          'strong DevOps and shift-left collaboration.',
      ],
    },
    {
      period: '2014/06 – 2019/09',
      title: 'Analyst, Technical Project Manager, Tech Lead',
      org: 'Ingenico / MS / CTO',
      place: 'Paris, France',
      intro: ['Axis Platform Operations (APO) supporting 3 billion transactions yearly.'],
      bullets: [
        'Managed cross-functional technical projects.',
        'SecOps - Oversaw operational security (HSM management, encryption solutions, audit trail).',
        'Ops - Automated the management of InStore batch submissions, settlement with acquirers (bank).',
        'Monitoring - Recovery after disaster, defined standards and developed plugins.',
        'Automation of all the deployment and installation of the platform.',
      ],
    },
    {
      period: '2013/09 – 2014/09',
      title: 'Consultant Developer, DevOps, Software Integrator',
      org: 'Financial service (for VisionIT)',
      place: 'Saint-Denis, France',
      intro: [
        'Replacement of the existing solution for the deployment of deliverables for multiple applications for an ' +
          'automated continuous deployment.',
      ],
      bullets: [
        'Auditing of the existing system.',
        'Integration and qualification of the new software solution.',
        'Improvement of existing algorithms and development of the retained solution (Bash, Groovy).',
        'Documentation, training, handover.',
      ],
    },
    {
      period: '2010/06 – 2013/08',
      title: 'Production Engineer, Consultant',
      org: 'VisionIT',
      place: 'Boulogne, France',
      intro: [
        'Various assignments for VisionIT within the Managed Services department for various financial services firms.',
      ],
      bullets: [
        'Storage, Virtualization, Network.',
        'Application Integration, deployment, technical documentation, training, support.',
        'Development Groovy.',
      ],
    },
    {
      period: '2005/09 – 2010/04',
      title: 'System Administrator',
      org: 'CE/CCE Air-France',
      place: 'Roissy CDG, France',
      intro: [
        "4 years in work-study, part of a BTS in Computer Maintenance and Network, followed by a bachelor's degree in " +
          'computer sciences and finally a fixed-term contract.',
      ],
    },
  ],
  education: [
    {
      // Final exam window closes 2027-03-09: after the exam, set the last step to done and drop "(in progress)".
      year: '2026/03 – 2027/03',
      title: 'HEC Paris Executive Education, Stratégie@HEC (in progress)',
      steps: [
        { label: 'Business Strategy', done: true },
        { label: 'Corporate Strategy', done: true },
        { label: 'Strategy Implementation & Change Management', done: true },
        { label: 'Final certification exam', done: false },
      ],
      details: [
        '12-month executive certificate (RS5539): strategic management, organizational governance, executive leadership.',
      ],
    },
    {
      year: '2021–2022',
      title: 'HEC Paris Executive Education, Worldline leadership track (selected participant)',
      details: [
        '"Influence transversale" (4-day short program, 2021)',
        '"Boost your mindset, boost your organization" (custom program, 2022)',
      ],
    },
    {
      year: '2009',
      title:
        "Bachelor's degree - Project Manager, Data, Security, IT Systems Management. Niveau 6 (ancien Niv II) – IPI, groupe IGS, Paris",
    },
    {
      year: '2007',
      title: 'Technical degree - IT and network maintenance, Niveau 5 (ancien Niv III) – IPI, groupe IGS, Paris',
    },
    { year: '2004', title: 'Technological Baccalaureate, Computer Science and Management.' },
  ],
  certifications:
    'Agile (PAL I), RH OpenShift (DO180), Microsoft (FIM M50382), Microsoft (MCSE 70-291), Cisco (CCNA), ITIL ' +
    '(Foundation), AWS Cloud Technical essentials, Google Cloud Essentials, Google Cloud Fundamentals Core ' +
    'Infrastructure…',
  pdf: '/cv/francois-guillon-cv.pdf',
};

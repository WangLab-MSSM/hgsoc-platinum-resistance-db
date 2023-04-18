// import generateClinicalTrack from './generateClinicalTrack'
// import generateTrackGroup from './generateTrackGroup'
// import generateLayout from './layout/generateLayout'

import { traceData1, traceData2, traceData3, traceData4, traceData5 } from './traces'

export default function generateHeatmap() {
  const Plotly = window.Plotly;
  const circle = '&#9679;'
  const diamond = '&#9670;'
  const square = '&#9632;'
  const trace1 = {
    ...traceData1,
    // x: ['Apoptotic signaling', 'p53 signaling', 'DDR', 'Platinum efflux', 'PKA signaling', 'CSC', 'Hedgehog signaling', 'Calcium signaling', 'Oncogene signaling', 'DDR/HR', 'Metabolism/lipid', 'Metabolism/OXPHOS', 'Transcription/Epigenetics', 'ECM/stroma', 'EMT', 'ECM signaling', 'WNT signaling', 'TGF-β signaling', 'Notch signaling', 'NF-kB signaling', 'Immune response', 'Detox', 'Apoptosis', 'Redox', 'Oncogene signaling/AKT', 'AMPK signaling', 'mTOR signaling', 'Metabolism/Glycolysis', 'DDR/direct repair', 'Cell cycle', 'Autophagy', 'Oncogene signaling/MAPK', 'DDR/BER', 'Platinum uptake', 'Oncogene signaling/EGFR', 'Translation', 'Redox/Glutathione', 'Hypoxia signaling', 'Metabolism/amino acid', 'DDR/nucleotide synthesis', 'Oncogene signaling/PKG', 'ER stress response', 'Transcription', 'pH/Pt-toxicity', 'ubiquitin', 'DDR/DNA replication', 'DDR/FA', 'MYC signaling', 'DDR/NER', 'immune response', 'Chaperone', 'Hippo signaling', 'vesicle trafficking', 'Hormone receptor signaling', 'Metabolism/Lipid', 'DDR/telomere', 'DDR/NHEJ', 'Metabolism/One carbon', 'RNA processing', 'Apoptotic signaling/MAPK', 'Apoptotic signaling/DR', 'DDR/TLS', 'Oncogene signaling/FGF', 'Oncogene signaling/VEGF', 'Metabolism/PPP', 'bystander effect', 'Metabolism/Glutaminolysis', 'Glycosylation', 'Oncogene signaling/HGF', 'lysosomes', 'Oncogene signaling/PKC', 'endocytosis', 'Apoptotic signaling/MMR', 'DDR/MMR', 'Oncogene signaling/EGF, FGF', 'actin cytoskeleton', 'Oncogene signaling/PDGF', 'mitochondria/synthesis', 'Apoptotic signaling/PKC', 'proteasome', 'exocytosis', 'Apoptotic signaling/ceramide', 'Metabolism/cholesterol', 'mitochondria/DNA ', 'chaperone', 'OXPHOS', 'Nuclear export'],
    // y: [36, 23, 30, 20, 8, 19, 1, 3, 12, 28, 0, 9, 8, 0, 17, 26, 11, 12, 4, 12, 22, 4, 18, 23, 20, 4, 8, 3, 0, 15, 15, 24, 7, 9, 3, 9, 8, 7, 4, 7, 1, 7, 14, 6, 6, 2, 12, 4, 8, 1, 4, 8, 1, 1, 1, 1, 4, 4, 9, 14, 3, 3, 2, 4, 2, 0, 0, 4, 3, 0, 2, 4, 1, 2, 0, 0, 1, 1, 2, 2, 1, 0, 1, 0, 0, 1, 0],
    name: `1 ${circle} or ${diamond}`,
    type: "bar",
    hoverinfo: ['a', 'b', 'c'],
    marker: {
      color: '#44AA99',
         line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    },
  },
    hovertemplate: '%{y}<extra></extra>',

  }
  const trace2 = {
    ...traceData2,
    // x: ['Apoptotic signaling', 'p53 signaling', 'DDR', 'Platinum efflux', 'PKA signaling', 'CSC', 'Hedgehog signaling', 'Calcium signaling', 'Oncogene signaling', 'DDR/HR', 'Metabolism/lipid', 'Metabolism/OXPHOS', 'Transcription/Epigenetics', 'ECM/stroma', 'EMT', 'ECM signaling', 'WNT signaling', 'TGF-β signaling', 'Notch signaling', 'NF-kB signaling', 'Immune response', 'Detox', 'Apoptosis', 'Redox', 'Oncogene signaling/AKT', 'AMPK signaling', 'mTOR signaling', 'Metabolism/Glycolysis', 'DDR/direct repair', 'Cell cycle', 'Autophagy', 'Oncogene signaling/MAPK', 'DDR/BER', 'Platinum uptake', 'Oncogene signaling/EGFR', 'Translation', 'Redox/Glutathione', 'Hypoxia signaling', 'Metabolism/amino acid', 'DDR/nucleotide synthesis', 'Oncogene signaling/PKG', 'ER stress response', 'Transcription', 'pH/Pt-toxicity', 'ubiquitin', 'DDR/DNA replication', 'DDR/FA', 'MYC signaling', 'DDR/NER', 'immune response', 'Chaperone', 'Hippo signaling', 'vesicle trafficking', 'Hormone receptor signaling', 'Metabolism/Lipid', 'DDR/telomere', 'DDR/NHEJ', 'Metabolism/One carbon', 'RNA processing', 'Apoptotic signaling/MAPK', 'Apoptotic signaling/DR', 'DDR/TLS', 'Oncogene signaling/FGF', 'Oncogene signaling/VEGF', 'Metabolism/PPP', 'bystander effect', 'Metabolism/Glutaminolysis', 'Glycosylation', 'Oncogene signaling/HGF', 'lysosomes', 'Oncogene signaling/PKC', 'endocytosis', 'Apoptotic signaling/MMR', 'DDR/MMR', 'Oncogene signaling/EGF, FGF', 'actin cytoskeleton', 'Oncogene signaling/PDGF', 'mitochondria/synthesis', 'Apoptotic signaling/PKC', 'proteasome', 'exocytosis', 'Apoptotic signaling/ceramide', 'Metabolism/cholesterol', 'mitochondria/DNA ', 'chaperone', 'OXPHOS', 'Nuclear export'],
    // y: [10, 5, 5, 6, 3, 12, 1, 1, 10, 6, 1, 1, 1, 0, 9, 16, 10, 2, 1, 7, 9, 0, 5, 6, 7, 6, 4, 6, 1, 4, 6, 3, 0, 2, 5, 4, 6, 5, 1, 0, 0, 2, 5, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    name: `2 ${circle} ${diamond}`,
    type: "bar",
    marker: {
      color: '#88CCEE',
             line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
    },
    hovertemplate: '%{y}<extra></extra>',
  }
  const trace3 = {
    ...traceData3,
    // x: ['Apoptotic signaling', 'p53 signaling', 'DDR', 'Platinum efflux', 'PKA signaling', 'CSC', 'Hedgehog signaling', 'Calcium signaling', 'Oncogene signaling', 'DDR/HR', 'Metabolism/lipid', 'Metabolism/OXPHOS', 'Transcription/Epigenetics', 'ECM/stroma', 'EMT', 'ECM signaling', 'WNT signaling', 'TGF-β signaling', 'Notch signaling', 'NF-kB signaling', 'Immune response', 'Detox', 'Apoptosis', 'Redox', 'Oncogene signaling/AKT', 'AMPK signaling', 'mTOR signaling', 'Metabolism/Glycolysis', 'DDR/direct repair', 'Cell cycle', 'Autophagy', 'Oncogene signaling/MAPK', 'DDR/BER', 'Platinum uptake', 'Oncogene signaling/EGFR', 'Translation', 'Redox/Glutathione', 'Hypoxia signaling', 'Metabolism/amino acid', 'DDR/nucleotide synthesis', 'Oncogene signaling/PKG', 'ER stress response', 'Transcription', 'pH/Pt-toxicity', 'ubiquitin', 'DDR/DNA replication', 'DDR/FA', 'MYC signaling', 'DDR/NER', 'immune response', 'Chaperone', 'Hippo signaling', 'vesicle trafficking', 'Hormone receptor signaling', 'Metabolism/Lipid', 'DDR/telomere', 'DDR/NHEJ', 'Metabolism/One carbon', 'RNA processing', 'Apoptotic signaling/MAPK', 'Apoptotic signaling/DR', 'DDR/TLS', 'Oncogene signaling/FGF', 'Oncogene signaling/VEGF', 'Metabolism/PPP', 'bystander effect', 'Metabolism/Glutaminolysis', 'Glycosylation', 'Oncogene signaling/HGF', 'lysosomes', 'Oncogene signaling/PKC', 'endocytosis', 'Apoptotic signaling/MMR', 'DDR/MMR', 'Oncogene signaling/EGF, FGF', 'actin cytoskeleton', 'Oncogene signaling/PDGF', 'mitochondria/synthesis', 'Apoptotic signaling/PKC', 'proteasome', 'exocytosis', 'Apoptotic signaling/ceramide', 'Metabolism/cholesterol', 'mitochondria/DNA ', 'chaperone', 'OXPHOS', 'Nuclear export'],
    // y: [2, 2, 4, 1, 0, 0, 0, 1, 6, 1, 1, 0, 0, 1, 3, 4, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    name: `3 ${square}`,
    type: "bar",
        marker: {
      color: '#DDCC77',
             line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
    },
    hovertemplate: '%{y}<extra></extra>',
  }
  const trace4 = {
    hovertemplate: '%{y}<extra></extra>',
    ...traceData4,
    // x: ['Apoptotic signaling', 'p53 signaling', 'DDR', 'Platinum efflux', 'PKA signaling', 'CSC', 'Hedgehog signaling', 'Calcium signaling', 'Oncogene signaling', 'DDR/HR', 'Metabolism/lipid', 'Metabolism/OXPHOS', 'Transcription/Epigenetics', 'ECM/stroma', 'EMT', 'ECM signaling', 'WNT signaling', 'TGF-β signaling', 'Notch signaling', 'NF-kB signaling', 'Immune response', 'Detox', 'Apoptosis', 'Redox', 'Oncogene signaling/AKT', 'AMPK signaling', 'mTOR signaling', 'Metabolism/Glycolysis', 'DDR/direct repair', 'Cell cycle', 'Autophagy', 'Oncogene signaling/MAPK', 'DDR/BER', 'Platinum uptake', 'Oncogene signaling/EGFR', 'Translation', 'Redox/Glutathione', 'Hypoxia signaling', 'Metabolism/amino acid', 'DDR/nucleotide synthesis', 'Oncogene signaling/PKG', 'ER stress response', 'Transcription', 'pH/Pt-toxicity', 'ubiquitin', 'DDR/DNA replication', 'DDR/FA', 'MYC signaling', 'DDR/NER', 'immune response', 'Chaperone', 'Hippo signaling', 'vesicle trafficking', 'Hormone receptor signaling', 'Metabolism/Lipid', 'DDR/telomere', 'DDR/NHEJ', 'Metabolism/One carbon', 'RNA processing', 'Apoptotic signaling/MAPK', 'Apoptotic signaling/DR', 'DDR/TLS', 'Oncogene signaling/FGF', 'Oncogene signaling/VEGF', 'Metabolism/PPP', 'bystander effect', 'Metabolism/Glutaminolysis', 'Glycosylation', 'Oncogene signaling/HGF', 'lysosomes', 'Oncogene signaling/PKC', 'endocytosis', 'Apoptotic signaling/MMR', 'DDR/MMR', 'Oncogene signaling/EGF, FGF', 'actin cytoskeleton', 'Oncogene signaling/PDGF', 'mitochondria/synthesis', 'Apoptotic signaling/PKC', 'proteasome', 'exocytosis', 'Apoptotic signaling/ceramide', 'Metabolism/cholesterol', 'mitochondria/DNA ', 'chaperone', 'OXPHOS', 'Nuclear export'],
    // y: [43, 12, 19, 20, 7, 37, 4, 3, 30, 26, 5, 8, 7, 3, 31, 34, 26, 17, 3, 26, 42, 4, 12, 29, 12, 4, 2, 5, 2, 36, 18, 10, 3, 9, 10, 7, 18, 12, 1, 4, 1, 4, 26, 0, 5, 3, 5, 1, 15, 5, 6, 5, 0, 2, 0, 1, 6, 0, 7, 2, 6, 4, 2, 0, 3, 1, 2, 0, 0, 0, 1, 0, 4, 4, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    name: `4 ${circle} ${square} or ${diamond} ${square}`,
    type: "bar",
    marker: {
      color: '#CC6677',
         line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
    },
  }
  const trace5 = {
    ...traceData5,
    // x: ['Apoptotic signaling', 'p53 signaling', 'DDR', 'Platinum efflux', 'PKA signaling', 'CSC', 'Hedgehog signaling', 'Calcium signaling', 'Oncogene signaling', 'DDR/HR', 'Metabolism/lipid', 'Metabolism/OXPHOS', 'Transcription/Epigenetics', 'ECM/stroma', 'EMT', 'ECM signaling', 'WNT signaling', 'TGF-β signaling', 'Notch signaling', 'NF-kB signaling', 'Immune response', 'Detox', 'Apoptosis', 'Redox', 'Oncogene signaling/AKT', 'AMPK signaling', 'mTOR signaling', 'Metabolism/Glycolysis', 'DDR/direct repair', 'Cell cycle', 'Autophagy', 'Oncogene signaling/MAPK', 'DDR/BER', 'Platinum uptake', 'Oncogene signaling/EGFR', 'Translation', 'Redox/Glutathione', 'Hypoxia signaling', 'Metabolism/amino acid', 'DDR/nucleotide synthesis', 'Oncogene signaling/PKG', 'ER stress response', 'Transcription', 'pH/Pt-toxicity', 'ubiquitin', 'DDR/DNA replication', 'DDR/FA', 'MYC signaling', 'DDR/NER', 'immune response', 'Chaperone', 'Hippo signaling', 'vesicle trafficking', 'Hormone receptor signaling', 'Metabolism/Lipid', 'DDR/telomere', 'DDR/NHEJ', 'Metabolism/One carbon', 'RNA processing', 'Apoptotic signaling/MAPK', 'Apoptotic signaling/DR', 'DDR/TLS', 'Oncogene signaling/FGF', 'Oncogene signaling/VEGF', 'Metabolism/PPP', 'bystander effect', 'Metabolism/Glutaminolysis', 'Glycosylation', 'Oncogene signaling/HGF', 'lysosomes', 'Oncogene signaling/PKC', 'endocytosis', 'Apoptotic signaling/MMR', 'DDR/MMR', 'Oncogene signaling/EGF, FGF', 'actin cytoskeleton', 'Oncogene signaling/PDGF', 'mitochondria/synthesis', 'Apoptotic signaling/PKC', 'proteasome', 'exocytosis', 'Apoptotic signaling/ceramide', 'Metabolism/cholesterol', 'mitochondria/DNA ', 'chaperone', 'OXPHOS', 'Nuclear export'],
    // y: [15, 9, 7, 3, 0, 15, 1, 1, 9, 8, 2, 3, 3, 0, 11, 14, 11, 6, 5, 10, 10, 1, 4, 9, 10, 2, 3, 2, 0, 11, 8, 7, 1, 1, 4, 0, 0, 5, 0, 1, 0, 3, 3, 0, 5, 3, 1, 3, 3, 1, 3, 2, 0, 0, 0, 0, 2, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    name: `5 ${circle} ${diamond} ${square}`,
    type: "bar",
    marker: {
      color: '#AA4499',
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5,
      },
    },
        hovertemplate: '%{y}<extra></extra>',

  }


  // var data = [trace1, trace2, trace3,trace4, trace5];
  var data = [trace5, trace4, trace3,trace2, trace1];

  var layout = {
      font: {
    // family: 'Courier New, monospace',
    size: 16,
    // color: '#7f7f7f'
  },
    barmode: 'stack',
    xaxis: {
      tickangle: -45,
      automargin: true,
      tickfont: {
        size: 13
      },
    },
    yaxis: {
      title: {
        text: '<b>Number of genes in pathway</b>',
      },
      tickfont: {
        size: 10
      },
    },
    annotations: [
    {
      x: 1,
      y: 0.6,
      xanchor: 'left',
      yanchor: 'top',
      xref: 'paper',
      yref: 'paper',
      text: `Evidence type<br>${circle} Cell line<br>${diamond} Xenograft<br>${square} Human cancer tissue`,
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -40
    },
      {
      x: 1.03,
      y: 1.05,
      xanchor: 'left',
      yanchor: 'top',
      xref: 'paper',
      yref: 'paper',
      text: `<b>SCORES</b>`,
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -40
    }
  ]
  };


  Plotly.newPlot('plotly', data, layout);
  return document.getElementById('plotly')
}
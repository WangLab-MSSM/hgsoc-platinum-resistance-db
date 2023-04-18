<template>
  <div class='home'>
            <div id="plotly-container">
        <div id="plotly"></div>
      </div>

        <section>
                 <div class="table-container">
          <div class="pw-label"><span><b>{{ selectedPathway.length === 0 ? 'Click pathway on bar chart to see gene set' : 'Selected pathway: ' }}</b> {{ selectedPathway }}
             <b-button size="is-small"
                       v-if="selectedPathway.length"
                       @click="clearSelectedPathway"
                icon-left="backspace"></b-button></span>
          </div>
     <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search genes"
            single-line
            hide-details
          ></v-text-field>
            <b-button type="is-info-light">
             <download-excel
               class="btn btn-default"
              :data="tableData"
              worksheet="My Worksheet"
              :name="selectedPathway.length ? `${selectedPathway}.xls` : `Platinum_Resistent_Genes.xls`"
             >
                 {{ selectedPathway.length ? `Download ${selectedPathway} table` : 'Download table' }}
            </download-excel>
            </b-button>
        </v-card-title>
        <v-data-table
          :headers="headers"
          item-key="HUGO Gene symbol"
          :items="tableData"
          :search="search"
          :expanded.sync="expanded"
          :single-expand="true"
          show-expand
        >
        <template v-slot:item.PMID="{ item }">
           <div v-html="item.PMID"></div>
        </template>
        <template v-slot:item.NCBI_link="{ item }">
           <div v-html="item.NCBI_link"></div>
        </template>

         <template v-slot:item.Uniprot_link="{ item }">
           <div v-html="item.Uniprot_link"></div>
        </template>

         <template v-slot:item.mechanisms="{ item }">
           <div v-html="item.mechanisms"></div>
        </template>

        <template v-slot:item.COSMIC="{ item }">
           <div v-html="item.COSMIC"></div>
        </template>

        <template v-slot:item.Putative_mechanism_associated_with_Pt_resistance="{ item }">
           <div v-html="item.Putative_mechanism_associated_with_Pt_resistance"></div>
        </template>


    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
       <b>FUNCTION</b><br>{{ item['Function'] }}<br><br>
       <b>NOTES</b><br>{{ item['Notes'] }}
      </td>
    </template>
        </v-data-table>
      </v-card>
     </div>

    </section>
  </div>
</template>

<script>
import generatePlot from '../plotly/plotly'

import geneData from '../df'
import columns from '../columns'

import pwGenes from '../pw_genes'

export default {
    name: 'home',
      data() {
    return {
      expanded: [],

      search: '',
      selectedPathway: '',
      includedPoints: [],
      headers: columns,
      notes: {1: 2, 3: 4}
    }
  },
  computed: {
    tableData() {
      if (this.selectedPathway.length === 0) {
        return geneData
      }
      return geneData.filter((el) => {
        return el['HUGO Gene symbol'] in pwGenes[this.selectedPathway] && this.includedPoints.includes(el['Scores'])
      })
    }
  },
  mounted() {
    let plot = generatePlot()
    plot.on('plotly_click', (data) => {
      const inclPoints = data.points.map(p => parseInt(p.data.name.split(' ')[0]))
      this.includedPoints = inclPoints
      const pw = data.points[0].x
      this.selectedPathway = pw
    });
  },
  methods: {
    clearSelectedPathway() {
      this.selectedPathway = ''
    }
  }

}
</script>

<style>

#plotly-container {
    margin: 0 auto;
}
  #plotly {
    min-height: 700px;
      min-width: 800px;
  }

  .pw-label {
    margin-left: 10px;
  }

    .table-container {
        width: 80%;
        margin: 0 auto;
    }
</style>
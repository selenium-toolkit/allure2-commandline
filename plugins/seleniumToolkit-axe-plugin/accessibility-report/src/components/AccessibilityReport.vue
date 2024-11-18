<template>
  <v-container v-if="loaded == true">
    <h1 v-if="reportData.url">Accessibility Report for {{ reportData.url }}</h1>
    <h1 v-else>Accessibility Report</h1>

    <h2>{{reportData.violations.length}} Violations Found</h2>
    <v-expansion-panels>
      <v-expansion-panel v-for="(violation, vIndex) in reportData.violations">
        <v-expansion-panel-title>
          <div>{{violation.help}}</div>
          <template v-slot:actions>
            <v-chip :color="getImpactColor(violation.impact)" variant="flat" class="ma-1">{{violation.impact}}</v-chip>
            <v-chip color="red" variant="flat" class="ma-1">{{violation.nodes.length}}</v-chip>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="violationContent">
          <v-row class="d-flex align-center" style="position: relative">
            <!-- Left Side: Description and Link -->
            <div style="margin: 15px; width: calc(100% - 160px); min-height: 32px">
              <div>{{axeRulesData[`${violation.id}`].rule_description}}</div>
<!--              <div><v-chip v-for="tag in violation.tags" label class="ma-1" size="small">{{tag}}</v-chip></div>-->
            </div>

            <!-- Right Side: Pagination -->
            <div style="position: absolute; top: 10px; right: 10px">
              <v-pagination
                  v-model="currentPages[vIndex]"
                  :length="pageCount(violation.nodes)"
                  :total-visible="1"
                  color="primary"
                  size="small"
              >
                <template #item>
                  <span class="pagination-item" style="margin-top: 9px; display: inline-block;">{{ currentPages[vIndex]?currentPages[vIndex]:1 }} of {{ pageCount(violation.nodes) }}</span>
                </template>
              </v-pagination>
            </div>
          </v-row>
          <v-list dense>
            <v-list-item
                v-for="(node, index) in paginatedNodes(violation.nodes, vIndex)"
                :key="'node' + index"
            >
              <v-list-item-content class="listItem">
                <pre v-if="node.target != undefined && node.target.length > 0" v-highlightjs style="margin-bottom: 5px"><code class="css">Locator: {{ node.target[0] }}</code></pre>
                <pre v-highlightjs><code class="html">{{ node.html }}</code></pre>
                <div class="mattersAffectedContainer">
                  <div class="failure-summary mattersContainer">
                    {{ axeRulesData[`${violation.id}`].why_it_matters }}
                  </div>
                  <div class="failure-summary affectedDisabilities">
                    <h3>Affected Disabilities:</h3>
                    <div v-for="(disability) in axeRulesData[`${violation.id}`].disabilities_affected">
                      <span class="iconContainer"><i :class="disability.icon_class.concat(' dis_').concat(disability.disability)"></i></span>{{disability.disability}}
                    </div>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import axeRules from '@/assets/axe_rules.json';
export default {
  name: "AccessibilityReport",
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      axeRulesData: axeRules,
      loaded: false,
      reportData: {
      },
      visibleDetails: [],
      itemsPerPage: 1, // Anzahl der Nodes pro Seite
      currentPages: {}, // Objekt zur Verwaltung der aktuellen Seite pro Violation-Gruppe
    };
  },
  methods: {
    impactClass(impact) {
      return {
        'text-error': impact === 'critical' || impact === 'blocker',
        'text-warning': impact === 'serious',
        'text-info': impact === 'moderate',
        'text-success': impact === 'minor'
      }[impact] || 'text-body';
    },
    toggleDetails(index) {
      this.visibleDetails[index] = !this.visibleDetails[index];
    },
    isDetailVisible(index) {
      return this.visibleDetails[index];
    },
    async loadReportData() {
      // Lade die JSON-Datei basierend auf dem `file`-Prop
      try {
        const response = await fetch(`${this.file}`);
        this.reportData = await response.json();
        this.loaded = true;
      } catch (error) {
        console.error("Fehler beim Laden der JSON-Datei:", error);
      }
    },
    pageCount(nodes) {
      return Math.ceil(nodes.length / this.itemsPerPage);
    },
    // Gibt die paginierten Nodes für die aktuelle Seite der jeweiligen Violation-Gruppe zurück
    paginatedNodes(nodes, vIndex) {
      const currentPage = this.currentPages[vIndex] || 1;
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return nodes.slice(start, end);
    },
    getImpactColor(impact) {
      return {
        critical: 'red',
        blocker: 'red',
        serious: 'orange',
        moderate: 'yellow',
        minor: 'green'
      }[impact] || 'grey';

    }
  },
  mounted() {
    if (this.file) {
      this.loadReportData();
    } else {
      console.error("Keine Datei angegeben.");
    }
  }
};
</script>

<style scoped>
.violationContent {
  background-color: rgba(0, 0, 0, 0.05);
}
pre code {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.10);
}
.failure-summary {
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.10);
  border: 2px solid #8d8d8d;
  white-space: pre-wrap; /* Erlaubt Zeilenumbrüche und Umbrüche im Text */
}
.v-list {
  background-color: unset !important;
}
.v-list .v-list-item {
  padding: 0 !important;
}
.iconContainer {
  display: inline-block;
  width: 40px;
  text-align: center;
}
.mattersAffectedContainer {
  display: flex;
  align-items: flex-start; /* Ausrichtung am oberen Rand */
  gap: 10px; /* Abstand zwischen den Containern */
}

.mattersContainer {
  flex: 1; /* Nimmt den restlichen Platz ein */
  max-width: calc(100% - 210px); /* Verhindert, dass es die Breite von .affectedDisabilities überschreitet */
}

.affectedDisabilities {
  width: 200px; /* Festgelegte Breite für diesen Container */
  flex-shrink: 0; /* Verhindert, dass die Breite des Containers schrumpft */
}
.disabilityIcon{
  font-size: 24px;
}
.dis_Deafblind {
  background-image: url('~@/assets/deafBlind.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 24px;
  width: 32px;
  display: inline-block;
}

.dark .v-expansion-panel{
  background-color: #7e7e7e;
  color: #fff;
}
.dark .v-expansion-panel .v-chip{
  color: #cccccc !important;
}
.dark .v-expansion-panel .v-chip.bg-green{
  background-color: #005d26 !important;
}
.dark .v-expansion-panel .v-chip.bg-red{
  background-color: #6c0000 !important;
}
.dark .v-expansion-panel .v-chip.bg-yellow{
  background-color: #a99b00 !important;
}

.dark .v-expansion-panel .listItem{
  color: #cccccc !important;
}
.dark .v-expansion-panel .hljs, .hljs-subst{
  color: #cccccc !important;
}

/* Darkmode: Bild invertieren */
.dark .dis_Deafblind {
  filter: invert(1) brightness(2); /* Invertiert Farben und erhöht Helligkeit */
}
</style>

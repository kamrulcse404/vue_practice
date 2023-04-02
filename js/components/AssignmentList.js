import Assignment from "./Assignment.js";

export default {

    components: { Assignment },

    template: `
        <section v-if="aasignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <assignment
                v-for="assignment in aasignments"
                :key="assignment.id"
                :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,

    props: {
        aasignments: Array,
        title: String
    }
}
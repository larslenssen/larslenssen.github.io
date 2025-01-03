// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you start seeing {% %} and {{ }}, these are referring to
// objects in this file.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.
module.exports = {
    publications: [
        {
            title: "Archetype Discovery from Taxonomies: A Method to Cluster Small Datasets of Categorical Data",
            teaser: "figures/hicss.png",
            authors: "Lars Lenssen, Philip Stahmann, Christian Janiesch and Erich Schubert",
            conference: "Proceedings of the 58th Hawaii International Conference on System Sciences",
            data: ["[Paper]".link("https://hdl.handle.net/10125/108984"), "[Code]".link("https://github.com/larslenssen/categoricalclustering")].join(" "),
            abstract: "This work addresses this gap by exploring information-theoretic approaches to develop a novel clustering method CatRED tailored for small categorical datasets such as taxonomy data. We evaluate our method through its application to two taxonomy datasets, demonstrating its effectiveness in generating archetypes.",
        },
        {
            title: "Medoid Silhouette clustering with automatic cluster number selection",
            teaser: "figures/silhouette.png",
            authors: "Lars Lenssen and Erich Schubert",
            conference: "Information Systems 120, 102290, 2024",
            data: ["[Paper]".link("https://doi.org/10.1016/j.is.2023.102290"), "[Code]".link("https://github.com/kno10/python-kmedoids")].join(" "),
            abstract: "There are many different clustering quality measures, to validate clustering results. We discuss the efficient medoid-based variant of the Silhouette, and provide two fast versions for the direct optimization.  Additionally, we provide a variant to choose the optimal number of clusters directly.",
        },
        {
            title: "Sparse Partitioning Around Medoids",
            teaser: "figures/sparsekmedoids.png",
            authors: "Lars Lenssen and Erich Schubert",
            conference: "Machine Learning under Resource Constraints -- Fundamentals 1, 182-196, 2023.",
            data: ["[Paper]".link("https://doi.org/10.1515/9783110785944-005")],
            abstract: "Partitioning Around Medoids (PAM, k-Medoids) is a popular clustering technique to use with arbitrary distance functions or similarities. By exploiting sparsity, we can avoid the quadratic runtime and memory requirements, and make this method scalable to even larger problems.",
        },
        {
            title: "Fast k-Nearest-Neighbor-Consistent Clustering",
            teaser: "figures/mouse.png",
            authors: "Lars Lenssen, Niklas Strahmann and Erich Schubert",
            conference: "LWDA 2023 (KDML: Best Paper Award)",
	    data: ["[Paper]".link("https://ceur-ws.org/Vol-3630/LWDA2023-paper34.pdf"),
            data: ["[Code]".link("https://elki-project.github.io/")].join(" "),
            abstract: "We propose a fast variant of the K-means clustering algorithm that uses the k-Nearest-Neighbor Consistency as a constraint.",
        },
        {
            title: "Clustering by Direct Optimization of the Medoid Silhouette",
            teaser: "figures/fastmsc.png",
            authors: "Lars Lenssen and Erich Schubert",
            conference: "SISAP 2022 (Best Student Paper Award)",
            data: ["[Paper]".link("https://doi.org/10.1007/978-3-031-17849-8_15"), "[Code]".link("https://github.com/kno10/python-kmedoids")].join(" "),
            abstract: "There are many different clustering quality measures, to validate clustering results. We discuss the efficient medoid-based variant of the Silhouette, and provide two fast versions for the direct optimization.",
        },
        {
            title: "Fast k-medoids Clustering in Rust and Python",
            teaser: "figures/joss.png",
            authors: "Erich Schubert and Lars Lenssen",
            conference: "Journal Open Source Software 7(75), 4183, 2022. ",
            data: ["[Paper]".link("https://doi.org/10.21105/joss.04183"), "[Python]".link("https://github.com/kno10/python-kmedoids"), "[Rust]".link("https://github.com/kno10/rust-kmedoids"),].join(" "),
            abstract: "We introduce the kmedoids Rust crate along with a Python wrapper package kmedoids to make this fast algorithm easier to employ by researchers in various fields.",
        },
    ],
    projects: [
        {
            title: "Design and implementation of the energy price brake.",
            technology: "SAP IS-U: Common Layer",
            duration: "11 Months (2023)",
            description: "Conception and implementation of the effects of the energy price brake on billing.",
        },
        {
            title: "Realization of market communication 2022 (MAKO2022)",
            technology: "SAP IS-U: Common Layer, IDXGC, IDXGL",
            duration: "10 Months (2022 - 2023)",
            description: "Conception and implementation for MAKO 2022, formats MSCONS, UTILMD, PARTIN.",
        },
        {
            title: "Teamlead: Mixed Applications",
            technology: "Applications on different technology stacks: Jboss, Sitecore, EAI, Selenium Testautomation, Azure Cloud Services, SAP IS-U.",
            duration: "12 Months (2020 - 2021)",
            description: "Coordination of a support / development team (15-20 team members), coordination with stakeholders, design of the offshore delivery concept.",
        },
        {
            title: "Teamlead: 2nd Level Support",
            technology: "SAP IS-U / CRM",
            duration: "11 Months (2018 - 2019)",
            description: "Coordination of a support team (8-10 team members), coordination with stakeholders, design and development of new requirements.",
        },
    ],
};
const CSU_COURSES = [
    {
        id: 1,
        name: '5660 Numerical Analysis I',
        description: <div>
            <p className="course-descr-title">MATH 5660. Numerical Analysis I (3)</p>
            <p className="course-descr-body">The course introduces fundamental concepts in numerical analysis and scientific computing, focusing on the mathematical and computational techniques used in engineering, data science, and machine learning. Topics include floating-point arithmetic, numerical stability, solving nonlinear and linear equations, Gaussian elimination, LU factorization, interpolation methods, least squares problems, and optimization techniques. Students will also explore numerical differentiation, integration methods (such as Newton-Cotes and Romberg integration), and error analysis. The course emphasizes practical implementation using Python, Jupyter Notebooks, and relevant mathematical libraries. Through theoretical discussions, coding exercises, and hands-on problem-solving, students will develop strong computational skills essential for tackling real-world numerical challenges.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Numerical Analysis (3rd Edition) - Timothy Sauer</p>

        </div>
    },
    {
        id: 2,
        name: '5792 Probabilistic Modeling',
        description: <div>
            <p className="course-descr-title">MATH 5792: Probabilistic Modeling (3)</p>
            <p className="course-descr-body">This course provides an introduction to probabilistic modeling and stochastic processes, focusing on Markov chains, Poisson processes, queuing theory, and Monte Carlo simulation. Students will learn to analyze discrete-time and continuous-time Markov chains, model real-world systems using Poisson processes, and explore queuing models used in operations research and network analysis. The course also covers random variate generation, variance reduction techniques, and output analysis for Monte Carlo simulations. Practical implementation will be emphasized using Python, NumPy, SciPy, Matplotlib, and Jupyter Notebooks. Through problem-solving exercises and simulations, students will develop the mathematical and computational skills needed to model and analyze complex stochastic systems in fields such as engineering, computer science, finance, and the social sciences. </p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Introduction to Probability Models (13th Edition) - Sheldon Ross</p>
        </div>
    },
    {
        id: 3,
        name: '7393 Bayesian Statistics',
        description: <div>
            <h1 className="course-descr-title">MATH 7393. Bayesian Statistics. (3)</h1>
            <p className="course-descr-body">The course provides an in-depth introduction to Bayesian statistical inference and data analysis, covering fundamental concepts and computational methods. Topics include prior and posterior distributions, conjugate models, single and multiparameter models, hierarchical models, and model evaluation techniques. Students will learn to implement Monte Carlo methods and Markov Chain Monte Carlo (MCMC) for Bayesian analysis and apply these techniques to real-world datasets. The course also explores generalized linear models (GLMs), normal error models, Bayesian regression, model checking, and hierarchical modeling. Emphasis is placed on using statistical software, particularly R, RStudio, and Stan, to perform Bayesian computations. </p>
            <p className="mt-4 course-descr-body"><strong>Book Used: </strong>Professor's Notes + Bayesian Data Analysis (3rd edition) - Gelman, Carlin, Stern, Dunson, Vehtari and Rubin</p>
        </div>  
    },
    {
        id: 4,
        name: '7600 Graduate Survey of Human Genetics',
        description: <div>
            <h1 className="course-descr-title">HMGP 7600. Graduate Survey of Human Genetics. (3)</h1>
            <p className="course-descr-body">The course explores key concepts and methodologies in human genetics and genomics, focusing on genomic technologies, medical genetics, and complex disease genetics. Topics covered include genes and genomes, next-generation sequencing, functional genomics, population structure, genome-wide association studies (GWAS), polygenic risk scores, and multi-omic approaches. Students will critically analyze research papers, learn how to design experiments to test genetic hypotheses, and develop grant-writing skills. The course also includes molecular diagnostic approaches, genetic syndromes, biochemical genetics, targeted vs. broad genetic testing, and the ethical implications of genetic research. Through discussions, take-home exams, and a final research proposal, students will gain hands-on experience in analyzing genetic data and understanding its applications in biomedical research, epidemiology, and computational biology.</p>
        </div>
    }
]

export default CSU_COURSES;
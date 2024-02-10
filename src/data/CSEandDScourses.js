const CSE_DATASCIENCE_COURSES = [
    {
        id: 1,
        name: '271 Object-Oriented Programming',
        description: <div>
            <p className="course-descr-title">CSE 271. Object-Oriented Programming. (3)</p>
            <p className="course-descr-body">The design and implementation of software using object-oriented programming techniques including inheritance, polymorphism, object persistence, and operator overloading. Students will analyze program specifications and identify appropriate objects and classes. Additional programming topics include dynamic memory recursion, using existing object libraries, and binary/ASCII file processing.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Big Java: Late Objects (1st Edition) - Horstmann</p>

        </div>
    },
    {
        id: 2,
        name: '274 Data Abstraction and Data Structures',
        description: <div>
            <p className="course-descr-title">CSE 274. Data Abstraction and Data Structures. (3)</p>
            <p className="course-descr-body">Abstract data types and their implementation as data structures using object-oriented programming. Use of object-oriented principles in the selection and analysis of various ADT implementations. Sequential and linked storage representations: lists, stacks, queues, and tables. Nonlinear data structures: trees and graphs. Recursion, sorting, searching, and algorithm complexity.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Object-Oriented Data Structures Using Java (4th Edition) - Dale, Joyce, Dale</p>
        </div>
    },
    {
        id: 3,
        name: '374 Algorithms I',
        description: <div>
            <p className="course-descr-title">CSE 374. Algorithms I. (3)</p>
            <p className="course-descr-body">Design, analysis and implementation of algorithms and data structures. Dynamic programming, brute force algorithms, divide and conquer algorithms, greedy algorithms, graph algorithms, and red-black trees. Other topics include: string matching and computational geometry.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Introduction to Algorithms (3rd Edition) - Cormen, Leiserson, Rivest, Stein</p>
        </div>
    },
    {
        id: 4,
        name: '385 Database Systems',
        description: <div>
            <p className="course-descr-title">CSE 385. Database Systems. (3)</p>
            <p className="course-descr-body">Overview of database management, database system architecture, and database modeling principles. Logical database design. The relational database model, relational integrity constraints, and relational algebra. Relational commercial database management systems and languages. Interactive database processing, view processing, and database application programming. Database integrity. Relational database design by normalization. File structures for database systems.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Databases Illuminated (3rd Edition) - Ricardo and Urban</p>
        </div>
    },
    {
        id: 5,
        name: '402 Statistical Programming',
        description: <div>
            <p className="course-descr-title">STA 402. Statistical Programming. (3)</p>
            <p className="course-descr-body">Introduction to the use of computers to process and analyze data. Techniques and strategies for managing, manipulating, and analyzing data are discussed. Emphasis is on the use of the SAS system. Statistical computing topics, such as random number generation, randomization tests, and Monte Carlo simulation, will be used to illustrate these programming ideas.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Statistical Programming in SAS (2nd edition) - A.J. Bailer</p>
        </div>
    },
    {
        id: 6,
        name: '404 Advanced Data Visualization',
        description: <div>
            <p className="course-descr-title">STA 404. Advanced Data Visualization. (3)</p>
            <p className="course-descr-body">Communicating clearly, efficiently, and in a visually compelling manner using data displays. Identifying appropriate displays based on various data characteristics/complexity, audiences, and goals. Using software to produce data displays. Integrating narratives and data displays. Critiquing visualizations based on design principles, statistical characteristics, and narrative quality.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Professor's Notes</p>
        </div>
    },
    {
        id: 7,
        name: '432 Machine Learning',
        description: <div>
            <p className="course-descr-title">CSE 432. Machine Learning. (3)</p>
            <p className="course-descr-body">This course introduces the process, methods, and computing tools fundamental to machine learning. Students will work on large real-world datasets to write code to accomplish tasks such as predicting outcomes, discovering associations, and identifying similar groups. Students will complete a term project showcasing the different steps of the machine learning process, from data cleaning to the extraction of accurate models and the visualization of results.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems (1st Edition) - Géron</p>
        </div>
    },
    {
        id: 8,
        name: '467. Statistical Learning',
        description: <div>
            <p className="course-descr-title">STA 467. Statistical Learning. (3)</p>
            <p className="course-descr-body">Introduction to methods of statistical learning, with emphases on both theory and implementation. Topics include supervised and unsupervised learning methods, including linear and nonlinear models for regression and classification, additive models, recursive partitioning methods, neural networks, support vector machines, association rules, and cluster analysis; ensemble methods; and methods of model assessment and selection.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> An Introduction to Statistical Learning with Applications in R (2nd Edition) - James, Witten, Hastie, Tibshirani</p>
        </div>
    },
    {
        id: 9,
        name: '273. Optimization Modeling',
        description: <div>
            <p className="course-descr-title">CSE 273. Optimization Modeling. (3)</p>
            <p className="course-descr-body">Use of deterministic models and computers to study and optimize systems. Includes an introduction to modeling, calculus-based models, financial models, spreadsheet models, and linear-programming models.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Optimization Modelling with Spreadsheets (3rd Edition) - Baker</p>
            <p className="mt-1 course-descr-body"><strong>Book Used:</strong> Operations Research: A Model-Based Approach (3rd Edition) - Eiselt and Sandblom</p>
        </div>
    },
    {
        id: 10,
        name: '466 Bioinformatics Computing Skills',
        description: <div>
            <p className="course-descr-title">BIO 466. Bioinformatics Computing Skills. (3)</p>
            <p className="course-descr-body">Study of the core computational and biological concepts in bioinformatics, with programming in Python, MySQL and Ubuntu OS. You will gain hands-on experience in popular bioinformatics applications, including BLAST, sequence alignment, genome browser, and gene annotation, among others.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Professor's Notes</p>
        </div>
    },
    {
        id: 11,
        name: '485 Bioinformatics Principles',
        description: <div>
            <p className="course-descr-title">BIO 485. Bioinformatics Principles. (3)</p>
            <p className="course-descr-body">Concepts and basic computational techniques for mainstream bioinformatics problems. Emphasis placed on transforming biological problems into computable ones and seeking solutions.</p>
            <p className="mt-4 course-descr-body"><strong>Book Used:</strong> Professor's Notes</p>
        </div>
    }
];

export default CSE_DATASCIENCE_COURSES;

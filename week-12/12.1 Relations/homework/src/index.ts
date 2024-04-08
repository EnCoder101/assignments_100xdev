import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient()
const port = 3001

app.use(express.json());


app.get("/surveys", async (req, res) => {
    //Fetch all surveys.
    const response = await prisma.survey.findMany({})
    res.status(200).json({
        message: "list of surveys",
        data: response
    })
})

app.post("/surveys", async (req, res) => {
    //Create a new survey.
    try {
        const title = req.body.title
        const questions = req.body.question
        const idOfAddedSurevey = await prisma.survey.create({
            data: {
                title: title
            },
            select: {
                id: true
            }
        });
        questions.forEach(async (question: any) => {
            const idOFAddedQuestion = await prisma.question.create({
                data: {
                    survey_id: idOfAddedSurevey.id,
                    question: question.text
                },
                select: {
                    question_id: true
                }
            })
            const options = question.options.forEach(async (option: any) => {
                const optionsAdded = await prisma.options.create({
                    data: {
                        question_id: idOFAddedQuestion.question_id,
                        option: option.text
                    }
                })
            })
        });
        res.status(200).json({
            message: "survey created"
        });
    } catch (err) {
        res.status(400).json({
            message: "some error",
            error: err
        });
    }

});

app.get("/surveys/:id", async (req, res) => {
    //Fetch a specific survey.
    try {
        const survey_id = parseInt(req.params.id)
        const survey_data = await prisma.survey.findUnique({
            where: {
                id: survey_id
            },
            select: {
                title: true,
                question: {
                    select: {
                        question: true,
                        options: {
                            select: {
                                option: true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json({
            message: "check",
            surveyData: survey_data
        });
    } catch (err) {
        res.status(400).json({
            message: "some error",
            error: err
        });
    }
})

app.put("/surveys/:id", async (req, res) => {
    // Update a specific survey. // not working as expected ..... onlt modifying survey name
    try {
        const toBeModifiedSurvey_id = parseInt(req.params.id);
        const surveydataTitle = req.body.title;
        const newQuestion = req.body.question;
        // console.log("newQuestion",newQuestion);
        const modified_survey = await prisma.survey.update({
            where: {
                id: toBeModifiedSurvey_id
            },
            data: {
                title: surveydataTitle
            }
        })
        // const modified_question = await prisma.question.update({
        //     where: {
        //         survey_id: toBeModifiedSurvey_id
        //     },
        //     data: {
        //         question: newQuestion[0].text
        //     },
        //     select: {
        //         question_id: true
        //     }
        // })
        res.status(200).json({
            message: "Data Modifed",
            surveyData: modified_survey
        });
    } catch (err) {
        res.status(400).json({
            message: "some error",
            error: err
        });
    }
})

app.delete("/surveys/:id", async (req, res) => {
    // Delete a specific survey.
    try {
        const survey_id = parseInt(req.params.id);
        const deleted_survey = await prisma.survey.delete({
            where: {
                id: survey_id
            }
        })
        res.status(200).json({
            message: "check",
            deletedSurvey: deleted_survey
        });
    } catch (err) {
        res.status(400).json({
            message: "some error",
            error: err
        });
    }
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

})
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_question_id_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_survey_id_fkey";

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "survey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE CASCADE ON UPDATE CASCADE;

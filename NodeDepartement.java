package LevelHard;

public class NodeDepartement {
    String departementName;
    String departementHead;
    ProjectList departementProject;
    NodeDepartement next;
    
    public NodeDepartement(String departementName, String departementHead){
        this.departementName = departementName;
        this.departementHead = departementHead;
        this.departementProject = new ProjectList();
        this.next = null;
    }
}
